import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
    install (app, options) {
        if (typeof (options.router) != undefined) {
            options.router.beforeEach((to, from, next) => {
                nprogress.start()
                next()
            })
            options.router.afterEach(() => {
                nprogress.done()
            })
        }
        app.config.globalProperties.$nprogress = nprogress
    }
}