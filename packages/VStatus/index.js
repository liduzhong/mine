import VStatus from './src/index.vue'
VStatus.install = function(Vue) {
    Vue.component(VStatus.name, VStatus)
}
export default VStatus