import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'demo-layout',
        component: () => import( /* webpackChunkName: "demo" */ './views/layouts/Master.vue'),
        children: [{
            path: '/',
            name: 'demo-home',
            component: () => import( /* webpackChunkName: "demo" */ './views/Home.vue'),
        }, {
            path: '/dashboard',
            name: 'demo-dashboard',
            component: () => import( /* webpackChunkName: "demo" */ './views/Home.vue'),
        }, {
            path: '/users',
            name: 'demo-user',
            component: () => import( /* webpackChunkName: "demo" */ './views/Home.vue'),
        }, {
            path: '/devtools',
            name: 'demo-devtools',
            component: () => import( /* webpackChunkName: "demo" */ './views/Home.vue'),
        }, {
            path: '/ui',
            name: 'demo-ui',
            component: () => import( /* webpackChunkName: "demo" */ './views/Home.vue'),
        }],
    }]
})