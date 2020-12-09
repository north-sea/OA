<template>
    <el-card>
        <nsc-form 
            :ctx="ctx"
            :options="$options.FormOptions" 
            v-model="cond"
            @confirm="onConfirm"
            @reset="onReset"
        >
        <template #extraBtns>
            <el-button class="nsc-form-btn" @click="create">
                新建
            </el-button>
        </template>
        </nsc-form>
        <nsc-table :records="record" :options="$options.TableOptions" >
            <template #op="{row}">
                <el-button class="nsc-btn" size="mini" icon="el-icon-edit" @click="update(row)" />
            </template>
        </nsc-table>
    </el-card>
</template>

<script>
import {getTypes} from '@/api/type';

import {FormOptions, TableOptions} from './constant/options';
import EditModal from './modal/edit-modal';
export default {
    name: "Config",
    data() {
        return {
            ctx: this,
            cond: {key:"type"},
            record: [],
        }
    },
    FormOptions,
    TableOptions,

    methods: {
        create() {
            this.$modal.open(EditModal, {}, {dialogProps: {width: '640px'}}).then(async () => {
                await this.list()
                this.$message.success('新建成功');
            }).catch((err) => err);
        },
        update(record) {
            this.$modal.open(EditModal, {record,list:this.record}, {dialogProps: {width: '640px'}}).then(async () => {
                await this.list()
                this.$message.success('修改成功');
            }).catch((err) => err);
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        async list() {
            const params = this.cond
            const {data: {body}} = await getTypes(params);
            this.record = body
        },
        onConfirm({values}) {
            this.cond = values;
            this.list()
        },
        onReset({values}) {
            this.cond = values;
            this.list()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>