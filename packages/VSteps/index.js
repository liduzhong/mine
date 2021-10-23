import VSteps from './src/index.vue'
VSteps.install = function(Vue) {
    Vue.component(VSteps.name, VSteps)
}
export default VSteps