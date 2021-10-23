import VModal from './src/index.vue'
VModal.install = function(Vue) {
    Vue.component(VModal.name, VModal)
}
export default VModal