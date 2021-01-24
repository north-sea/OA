<template>
    <nsc-form 
        :ctx="ctx"
        :options="FormOptions" 
        v-model="cond"
        @confirm="onConfirm"
    >
        <template #qrcode>
	        <el-image v-if="cond.qrcode" :src="cond.qrcode" fit="fill"></el-image>
            <el-button class="nsc-form-btn" @click="toggleShow">
                上传二维码
            </el-button>
            <nsc-upload
                @crop-success="cropSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="show"
                :width="300"
                :height="300"
                :no-circle="true"
                img-format="png"></nsc-upload>
        </template>
    </nsc-form>
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
            cond,
            show: false,
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
        toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------');
            this.$set(this.cond,'qrcode',imgDataUrl)
        },
        cropUploadFail(status, field) {
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        },
        async onConfirm({values}) {
            const {id, name, isEdit} = this;
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