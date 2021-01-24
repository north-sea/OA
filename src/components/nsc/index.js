import NscForm from './nsc-form';
import NscTable from './nsc-table';
import NscModal from './nsc-modal';

//第三方
import myUpload from 'vue-image-crop-upload';

export default {
  install(Vue) {
    Vue.component('nsc-form', NscForm);
    Vue.component('nsc-table', NscTable);
    Vue.component('nsc-modal', NscModal);
    Vue.component('nsc-upload', myUpload);
  }
};
