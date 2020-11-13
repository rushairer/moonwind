import * as toast from 'noty'
import 'noty/lib/noty.css'

export default {
    install(Vue) {
        const DEFAULT_CONFIG = {
            timeout: 3000,
        }

        const toastObj = {
            alert: (config) => {
                let newConfig = Object.assign(DEFAULT_CONFIG, config)

                return new toast({
                    text: newConfig.message,
                    timeout: newConfig.timeout,
                    type: 'alert',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },

            success: (config) => {
                let newConfig = Object.assign(DEFAULT_CONFIG, config)

                return new toast({
                    text: newConfig.message,
                    timeout: newConfig.timeout,
                    type: 'success',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },

            info: (config) => {
                let newConfig = Object.assign(DEFAULT_CONFIG, config)

                return new toast({
                    text: newConfig.message,
                    timeout: newConfig.timeout,
                    type: 'info',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },

            warning: (config) => {
                let newConfig = Object.assign(DEFAULT_CONFIG, config)

                return new toast({
                    text: newConfig.message,
                    timeout: newConfig.timeout,
                    type: 'warning',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },

            error: (config) => {
                let newConfig = Object.assign(DEFAULT_CONFIG, config)

                return new toast({
                    text: newConfig.message,
                    timeout: newConfig.timeout,
                    type: 'error',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },

            apiError: (res) => {
                let message = '<b>Unknown Error</b>'
                if (res.status) {
                    message = `<b>Error ${res.status}</b><br/>${res.data.message || 'Internal server error'}`
                }
                return new toast({
                    text: message,
                    timeout: 5000,
                    type: 'error',
                    theme: 'mars',
                    layout: 'topRight',
                }).show()
            },
        }

        Object.defineProperties(Vue.prototype, {
            $toast: {
                get: () => toastObj
            }
        })
    }
}