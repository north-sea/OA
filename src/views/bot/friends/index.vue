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
            <el-button class="nsc-form-btn" @click="sync">
                同步
            </el-button>
        </template>
        </nsc-form>
        <nsc-table :records="record" :options="$options.TableOptions" >
            <template #avatar="{row:{avatar}}">
                <el-avatar shape="square" size="medium" :src="avatar"></el-avatar>
            </template>
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
import {getBotFriends} from '@/api/bot';

import {FormOptions, TableOptions} from './constant/options';

export default {
    name: 'BotFriends',
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
        async sync() {
            const {data: {body}} = await getBotFriends({isSync:true});
            this.record = body
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
            const {data: {body}} = await getBotFriends(params);
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
    },
}
</script>

<style lang="scss" scoped>
</style>