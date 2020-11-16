import Sidebar from './src/main'

Sidebar.install = function (app) {
    app.component(Sidebar.name, Sidebar)
}

export default Sidebar