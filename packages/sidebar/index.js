import Sidebar from './src/main'

Sidebar.install = function (Vue) {
    Vue.component(Sidebar.name, Sidebar)
}

export default Sidebar