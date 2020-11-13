import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Moonwind from '../index'

import './assets/styles/ui.css'
import '../assets/styles/moonwind.css'

Vue.config.productionTip = false

Vue.use(Moonwind, {
    router: router
})

const vm = new Vue({
    router,
    render: h => h(App)
})
vm.$mount('#app')