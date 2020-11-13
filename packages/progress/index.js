import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
    install(Vue, options) {
        if (typeof (options.router) != undefined) {
            options.router.beforeEach((to, from, next) => {
                nprogress.start()
                next()
            })
            options.router.afterEach(() => {
                nprogress.done()
            })
        }
        Object.defineProperties(Vue.prototype, {
            $progress: {
                get: () => nprogress
            }
        })
    }
}