<template>
    <nsc-form 
        :ctx="ctx"
        :options="FormOptions" 
        v-model="cond"
        @confirm="onConfirm"
    />
</template>

<script>
import {mapGetters} from 'vuex';

import modal from '@/mixin/modal'
import {insert, update} from '@/api/interviewer'
import {genFormOptions} from './constant/options'
export default {

    name: "EditModal",

    mixins: [modal],
    dialogProps: {
        title: '配置信息',
    },
    props: {
        record: {
            type: Object,
            default: () => ({})
        },
        list: {
            type: Array,
            default: () => ([])
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
        ...mapGetters(['id', 'name']),

        isEdit() {
            return !!this.record._id
        },

        FormOptions() {
            return genFormOptions(this.isEdit)
        }
    },
    methods: {
        async onConfirm({values}) {
            const {id, name,isEdit} = this;
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