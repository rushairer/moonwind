import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Moonwind from '../index'

import './assets/styles/ui.css'
import '../assets/styles/moonwind.css'

const app = createApp({
    ...App,
})
app.use(router)
app.use(Moonwind, {
    router: router
})

app.mount('#app')