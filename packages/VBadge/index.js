import VBadge from './src/index.vue'
VBadge.install = function(Vue) {
    Vue.component(VBadge.name, VBadge)
}
export default VBadge