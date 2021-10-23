import VProgress from './src/index.vue'
VProgress.install = function(Vue) {
    Vue.component(VProgress.name, VProgress)
}
export default VProgress