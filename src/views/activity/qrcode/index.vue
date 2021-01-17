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
            <el-button :loading="downloadLoading"  class="nsc-form-btn" type="primary" icon="el-icon-document" @click="handleDownload">
                导出 Excel
            </el-button>
        </template>
        </nsc-form>
        <nsc-table :records="record" :options="$options.TableOptions" >
            <template #op="{row}">
                <el-button class="nsc-btn" size="mini" icon="el-icon-edit" @click="update(row)" />

                <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="onDelete(row)" >
                    <el-button   slot="reference" class="nsc-btn" type="danger" size="mini" icon="el-icon-delete"  />
                </el-popconfirm>

            </template>
        </nsc-table>

    </el-card>
</template>

<script>
import {getList, remove} from '@/api/activity/qrcode';

import {FormOptions, TableOptions} from './constant/options';
import EditModal from './modal/edit-modal';


export default {
    name: 'recruit',
    data() {
        return {
            ctx: this,
            downloadLoading: false,
            cond: {},
            record: [],
            autoWidth: true,
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
            this.$modal.open(EditModal, {record}, {dialogProps: {width: '640px'}}).then(async () => {
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
            const {data: {body}} = await getList(params);
            this.record = body
        },
        onConfirm({values}) {
            this.cond = values;
            this.list()
        },
        onReset({values}) {
            this.cond = values;
            this.list()
        },
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                excel.export_json_to_excel({
                    options: TableOptions,
                    data: this.record,
                    filename: this.$route.name,
                })
                this.downloadLoading = false
            })
        },
    },
}
</script>

<style lang="scss" scoped>

</style>