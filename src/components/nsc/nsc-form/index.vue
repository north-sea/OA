<template>
    <div class="nsc-form">
        <el-form ref="form" v-bind="{...formOptions.formProps}" :model="values" label-width="80px">
            <template v-for="def in formOptions.fieldDefs">
                <el-form-item 
                    v-if="!evalProp(def.hide, getFormCtx())"
                    :key="def.field"
                    v-bind="{
                        ...formOptions.commonItemProps,
                        ...def.itemProps,
                        label: def.label
                    }"
                    >
                    <slot :name="def.field" v-bind="{...getFormCtx()}">
                        <component
                            :is="is(def)"
                            v-bind="getProps(def)"
                            v-model="values[def.field]"
                            @change="onChange($event, def)"
                            v-on="getListeners(def)"
                        >
                        </component>
                    </slot>
                </el-form-item>
            </template>
            <el-form-item 
                ref="btnItem"
                class="nsc-form-btn-item">
                <slot name="btns" v-bind="{...getFormCtx()}">
                    <el-button v-if="$listeners.reset" class="nsc-form-btn" @click="onReset">
                        重置
                    </el-button>
                    <el-button
                        v-if="$listeners.confirm"
                        class="nsc-form-btn"
                        type="primary"
                        @click="onConfirm"
                    >
                        确认
                    </el-button>
                    <el-button v-if="$listeners.cancel" class="nsc-form-btn" @click="onCancel">
                        取消
                    </el-button>
                </slot>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {evalProp, pickValue} from '@/utils';
import FieldMap from './constant/field-map';
import DefType from './constant/def-type';

export default {
    name: 'NscForm',
    props: {
        ctx: {
            type: Object,
            default: null
        },
        values: {
            type: Object,
            default: () => ({})
        },
        options: {
            type: Object,
            required: true
        },
        autoSearch: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        formOptions() {
            return this.options
        }
    },
    mounted() {
        this.form = this.$refs.form;
        if (this.autoSearch) this.onReset();
    },
    data() {
        return {
            form: {}
        }
    },
    methods: {
        evalProp,
        getFormCtx() {
            const {
                ctx, form, values
            } = this;

            return {
                ctx: ctx || this.$parent,
                nf: this,
                form,
                values
            };
        },
        getListeners(def) {
            const {field, enumType, type, component} = def;
            const {text} = DefType;
            const listeners = {};
            if ((!type && !enumType && !component) || [text].includes(type)) {
                listeners.pressEnter = () => this.$emit(`${field}PressEnter`, this.getFormCtx());
            }

            return listeners;
        },
        onChange(event, def) {
            const {field, onChange} = def;
            if (!onChange && !this.$listeners.change) return;

            this.$nextTick(() => {
                const {values, ...rest} = this.getFormCtx();
                const params = {
                    ...rest,
                    values,
                    value: pickValue(values, field),
                    def
                };
                this.$emit('change', params);

                if (onChange) {
                    onChange(params);
                }
            });
        },
        is({type, component, enumType}) {
            if (component) {
                return component;
            }

            if (enumType) {
                return FieldMap[DefType.select];
            }

            const {date, dateTime} = DefType;
            if ([date, dateTime].includes(type)) {
                return FieldMap[DefType.date];
            }

            return FieldMap[type] || FieldMap.text;
        },
        getProps(def) {
            const {enumType, disabled, field} = def;
            const formCtx = this.getFormCtx();
            formCtx.value = pickValue(formCtx.values, field);
            let {type, props = {}} = def;
            if (!type) {
                type = enumType ? DefType.select : DefType.text;
            }
            props = {
                ...evalProp(props, formCtx),
                disabled: evalProp(disabled, formCtx)
            };
            if (enumType) {
                props.enumType = evalProp(enumType, formCtx);
            }

            return {
                ...props,
                def: {
                    ...def,
                    props
                }
            };
        },
        onReset() {
            const {values} = this;
            const formCtx = {...this.getFormCtx(), values};
            this.form.resetFields();
            this.$emit('reset', formCtx);
            this.$emit('change', formCtx);
        },
        onConfirm() {

            this.form.validate((valid) => {
                if (valid) {
                    this.$emit('confirm', this.getFormCtx());
                }
            })
        },
        onCancel() {
            this.$emit('cancel', {form: this.form});
        },
    },
}
</script>

<style lang="scss" scoped>
.el-form-item {
    // max-width: 256px;
}
</style>