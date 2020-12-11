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
                <el-button class="nsc-btn" type="danger" size="mini" icon="el-icon-delete" @click="onDelete(row)" />
            </template>
        </nsc-table>
    </el-card>
</template>

<script>
import {getAllTypes, remove} from '@/api/type';

import {FormOptions, TableOptions} from './constant/options';
import EditModal from './modal/edit-modal';
export default {
    name: "Config",
    data() {
        return {
            ctx: this,
            cond: {},
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
            this.$modal.open(EditModal, {record, list: this.record}, {dialogProps: {width: '640px'}}).then(async () => {
                await this.list()
                this.$message.success('修改成功');
            }).catch((err) => err);
        },

        async onDelete({_id}) {
            await remove({_id});
            await this.list()
            this.$message.success('删除成功');
        },

        async list() {
            const params = this.cond
            const {data: {body}} = await getAllTypes(params);
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