<template>
    <JsonEditor :value="cond" @confirm="onConfirm"></JsonEditor>
</template>

<script>
import modal from '@/mixin/modal'
import {insert, update} from '@/api/type'
import JsonEditor from '@/components/JsonEditor'
export default {

    name: "EditModal",

    mixins: [modal],
    dialogProps: {
        title: '配置信息',
    },
    components: {
        JsonEditor,
    },
    props: {
        record: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        const {record} = this;
        const cond = record ? {...record} : {}
        return {
            ctx: this,
            cond
        }
    },
    computed: {
        isEdit() {
            return !!this.record._id
        },
    },
    methods: {
        async onConfirm(values) {
            const {isEdit} = this;
            console.log(values)
            if (isEdit) {
                await update({...values})
            } else {
                await insert({...values})
            }
            this.close()
        }
    },
}
</script>

<style lang="scss" scoped>
</style>