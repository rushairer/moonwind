import path from 'path'
import Card from './packages/card/index'
import Sidebar from './packages/sidebar/index'
import Progress from './packages/progress/index'
import Toast from './packages/toast/index'
import Modal from './packages/modal/index'
import Ripple from './src/directives/ripple'

const components = [
    Card,
    Sidebar,
]

const plugins = [
    Progress,
    Toast,
    Modal,
]

const install = function (Vue, options) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    plugins.forEach(plugin => {
        Vue.use(plugin, options)
    })

    Ripple.color = 'rgba(255, 255, 255, 0.35)'
    Ripple.zIndex = 55
    Vue.directive('ripple', Ripple)
}

export default {
    version: path.join(__dirname, 'package.json').version,
    install,
    Card,
    Sidebar,
    Progress,
    Toast,
    Modal,
}