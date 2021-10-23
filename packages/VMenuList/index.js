import VMenuList from './src/index.vue'

VMenuList.install = function(Vue) {
    Vue.component(VMenuList.name, VMenuList)
}

export default VMenuList