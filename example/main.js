import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tailwindcss/tailwind.css'
import './assets/styles/tailwind.css'
Vue.config.productionTip = false
    /* const req = require.context('./components', true, /\.vue$/)
    const requireAll = requireContext => requireContext.keys().map(requireContext)
    const components = requireAll(req)
    const cmpReg = new RegExp(/\/components\/(\w+)\/index.vue$/)
    components.forEach(cmp => {
        if (cmpReg.test(cmp.default.__file)) {
            const exec = cmpReg.exec(cmp.default.__file)
            const cmpName = exec[1]
            Vue.component(cmpName, cmp.default)
        }
    }) */
import daisyui from '../packages'
Vue.use(daisyui)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')