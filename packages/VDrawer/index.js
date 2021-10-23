import VDrawer from './src/index.vue'
VDrawer.install = function(Vue) {
    Vue.component(VDrawer.name, VDrawer)
}
export default VDrawer