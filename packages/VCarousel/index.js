import VCarousel from './src/index.vue'
VCarousel.install = function(Vue) {
    Vue.component(VCarousel.name, VCarousel)
}
export default VCarousel