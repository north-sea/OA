<template>
    <el-card>
        <nsc-form 
            :ctx="ctx"
            :options="$options.FormOptions" 
            v-model="cond"
            @confirm="onConfirm"
            @reset="onReset"
        >
        </nsc-form>
        <nsc-table :records="record" :options="$options.TableOptions" />
    </el-card>
</template>

<script>
import {getList, remove} from '@/api/activity/customer';

import {FormOptions, TableOptions} from './constant/options';


export default {
    name: 'recruit',
    data() {
        return {
            ctx: this,
            cond: {},
            record: [],
            autoWidth: true,
        }
    },
    FormOptions,
    TableOptions,

    methods: {
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
    },
}
</script>

<style lang="scss" scoped>

</style>