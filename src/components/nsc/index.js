import NscForm from './nsc-form';
import NscTable from './nsc-table';


export default {
  install(Vue) {
    Vue.component('nsc-form', NscForm);
    Vue.component('nsc-table', NscTable);
  }
};
