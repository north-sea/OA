<template>
    <div class="nsc-modal">
        <el-dialog
            v-for="({
                visible,
                modalComponent,
                componentProps,
                dialogProps,
                close,
                dismiss,
                afterClose,
            }, key) in modalMap"
            :key="key"
            v-bind="{
                visible,
                destroyOnClose: true,
                closeOnClickModal: false,
                width: dialogProps.width||'768px',
                style: {overflowX: 'hidden', overflowY: 'auto'},
                ...modalComponent.dialogProps,
                ...dialogProps
            }"
            @close="dismiss"
            @closed="afterClose"
        >
            <component
                :is="modalComponent"
                v-bind="{
                    ...componentProps,
                    close,
                    dismiss
                }"
            />
            <template v-if="modalComponent.onlyClose" v-slot:footer>
                <el-button @click="close" v-text="`关闭`" />
            </template>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
let count = 0;
export default {
    name: 'nscModal',
    data() {
        return {
            modalMap: {}
        };
    },

    beforeCreate() {
        this.$nextTick(() => {
            if (count > 1) {
                throw new Error('nscModal is singleton pattern!');
            }
        });

        count += 1;
    },
    created() {
        const {open, clearModals, $router} = this;
        const modalKey = '$modal';
        Vue.prototype[modalKey] = {
            open,
            clearModals
        };
        $router.beforeEach((from, to, next) => {
            clearModals();
            next();
        });
    },

    beforeDestroy() {
        count -= 1;
    },
    methods: {
        open(modalComponent, componentProps, options) {
            const {modalMap, closeModal, clearModal} = this;
            const {dialogProps} = options || {};

            return new Promise((resolve, reject) => {
                const key = `${modalComponent.name}-${Object.keys(modalMap).length}`;
                const close = (...args) => {
                    closeModal(key);
                    resolve(...args);
                };
                const dismiss = (...args) => {
                    closeModal(key);
                    reject(...args);
                };
                const afterClose = () => clearModal(key);
                this.modalMap = {
                    ...modalMap,
                    [key]: {
                        key,
                        visible: true,
                        modalComponent,
                        componentProps,
                        dialogProps,
                        close,
                        dismiss,
                        afterClose,
                    }
                };
            });
        },

        closeModal(key) {
            const {modalMap} = this;
            if (modalMap[key]) {
                this.$set(modalMap, key, {
                    ...modalMap[key],
                    visible: false
                });
            }
        },

        clearModal(key) {
            this.$delete(this.modalMap, key);
        },

        clearModals() {
            this.modalMap = {};
        }
    }
}
</script>

<style lang="scss" scoped>
.nsc-modal {
    ::v-deep .el-form-item__content {
        width: 256px;
    }

    ::v-deep {
        &.el-select,.el-input {
            width: 256px;
            display: block;
        }
    }
}
</style>