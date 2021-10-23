import VArtBoard from './src/index.vue'
VArtBoard.install = function(Vue) {
    Vue.component(VArtBoard.name, VArtBoard)
}
export default VArtBoard