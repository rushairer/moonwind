import path from 'path'
import Card from './packages/card/index'
import Sidebar from './packages/sidebar/index'
import Progress from './packages/progress/index'
import Toast from './packages/toast/index'
import Modal from './packages/modal/index'
import Ripple from './src/directives/ripple'

const components = [
    Card,
    Modal,
    Sidebar,
]

const plugins = [
    Progress,
    Toast,
]

const install = function (app, options) {
    components.forEach(component => {
        app.component(component.name, component)
    })

    plugins.forEach(plugin => {
        app.use(plugin, options)
    })

    Ripple.color = 'rgba(255, 255, 255, 0.35)'
    Ripple.zIndex = 55
    app.directive('ripple', Ripple)
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