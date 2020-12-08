<template>
    <div class="nsc-table">
        <el-table ref="table" v-bind="{...tableOptions.props}" :data="records">
            <template v-for="def in tableOptions.colDefs">
                <el-table-column
                    :key="def.field"
                    :prop="def.field"
                    :label="def.label"
                    v-bind="{
                        ...tableOptions.commonProps,
                        ...def.itemProps,
                    }">
                    <template v-if="hasSlot(def.field)" #[def.field]="scope">
                        <VNodes :vnodes="renderSlot(def,scope)" />
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "NscTable",
    props: {
        options: {
            type: Object,
            default: () => ({})
        },
        records: {
            type: Array,
            default: null
        }
    },
    components: {
        VNodes: {
            functional: true,
            render: (ce, ctx) => ctx.props.vnodes
        }
    },
    computed: {
        tableOptions() {
            return this.options
        }
    },
    methods: {
        hasSlot(name) {
            const {$slots, $scopedSlots} = this;
            return !!$slots[name]
                || !!$scopedSlots[name];
        },

        renderSlot({field}, scope) {
            console.log(scope)
            const {$slots, $scopedSlots} = this;
            const render = $scopedSlots[field];
            return render({...scope})
        },
    },

}
</script>

<style lang="scss" scoped>
</style>