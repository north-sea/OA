<script>
import {evalProp, enumOptionsConvert} from '@/utils';

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
    async created() {
        await enumOptionsConvert(this.options, 'colDefs')
    },
    methods: {
        hasSlot(name) {
            const {$slots, $scopedSlots} = this;
            return !!$slots[name]
                || !!$scopedSlots[name];
        },
        getFormatter(props) {
            let {
                filter, map , enumType
            } = props;

            return (row, column, cellValue, index) => {
                if (filter) return filter(cellValue);
                if (map) return map[cellValue];
                if (enumType) return enumType.MAP[cellValue];
                return cellValue
            }
        }
    },
    render() {
        const {records, tableOptions: {props, colDefs, commonProps}, $scopedSlots} = this;
        const tableProps = {
            props: {
                ...props,
                data: records
            }
        }
        return (
            <div class="nsc-table">
                <el-table {...tableProps} ref="table">
                    {
                        colDefs.map(def => {
                            const {field, label, itemProps = {}} = def;
                            const hasSlot = this.hasSlot(field);
                            const columnProps = {
                                props: {
                                    prop: field,
                                    label,
                                    key: field,
                                    ...commonProps,
                                    formatter: this.getFormatter(def),
                                    ...itemProps,
                                },
                            }

                            if (hasSlot) columnProps.scopedSlots = {default: $scopedSlots[field]}

                            return (<el-table-column {...columnProps} />)
                        })
                    }
                </el-table>

            </div>
        )
    }
}
</script>

<style lang="scss" scoped>
</style>