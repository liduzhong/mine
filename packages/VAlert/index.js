import VAlert from './src/index.vue'
VAlert.install = function(Vue) {
    Vue.component(VAlert.name, VAlert)
}
export default VAlert