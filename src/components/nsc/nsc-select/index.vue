<template>
    <div>
        <el-select v-bind="def.props" v-model="compValue" @change="onChange" clearable>
            <el-option
                v-for="item in options"
                :key="item.key"
                v-bind="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'NscSelect',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: [String, Number, Array, Boolean],
            default: undefined
        },
        enumType: {
            type: [String, Object],
            required: true
        },
        def: {
            type: Object,
            required: true
        }
    },
    computed: {
        options() {
            return this.enumType.LIST
        }
    },
    watch: {
        value(val) {
            if (val === this.compValue) return;

            this.compValue = val;
        }
    },
    data() {
        return {
            compValue: this.value
        }
    },
    methods: {
        onChange(val) {
            this.$emit('change', val);
        },
    },

}
</script>

<style lang="scss" scoped>
</style>