import VPagination from './src/index.vue'
VPagination.install = function(Vue) {
    Vue.component(VPagination.name, VPagination)
}
export default VPagination