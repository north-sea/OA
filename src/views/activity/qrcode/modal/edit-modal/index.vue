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
import {insert, update} from '@/api/activity/qrcode'
import {genFormOptions} from './constant/options'
export default {

    name: "EditModal",

    mixins: [modal],
    dialogProps: {
        title: '候选人信息',
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
                await update({...values, creatorId: id, creatorName: name})
            } else {
                await insert({...values, creatorId: id, creatorName: name})
            }
            this.close()
        }
    },
}
</script>

<style lang="scss" scoped>
</style>