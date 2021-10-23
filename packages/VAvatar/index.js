import VAvatar from './src/index.vue'
VAvatar.install = function(Vue) {
    Vue.component(VAvatar.name, VAvatar)
}
export default VAvatar