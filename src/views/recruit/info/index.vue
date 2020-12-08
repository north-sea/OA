<template>
    <el-card>
        <nsc-form 
            :ctx="ctx"
            :options="$options.FormOptions" 
            v-model="cond"
            @confirm="onConfirm"
            @reset="onReset"
        />
        <nsc-table :records="record" :options="$options.TableOptions" >
            <template #op="scope">
                test {{scope}}
            </template>
            <template #timeUpdated>
                timeUpdated
            </template>
        </nsc-table>
    </el-card>
</template>

<script>
import {FormOptions,TableOptions} from './constant/options';
import {getList} from '@/api/interviewer';

export default {
    name: 'recruit',
    data() {
        return {
            ctx: this,
            cond: {},
            record: []
        }
    },
    FormOptions,
    TableOptions,

    methods: {
        async list(params) {
            const {data: {body}} = await getList(params);
            this.record = body
        },
        onConfirm({values}) {
            this.list(values)
        },
        onReset({values}) {
            this.list(values)
        }
    },
}
</script>

<style lang="scss" scoped>
</style>