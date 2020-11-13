import Swal from 'sweetalert2'

export default {
    install(Vue) {
        const modal = Swal.mixin({
            customClass: {
                popup: 'modal_popup',
                actions: 'modal_actions',
                content: 'modal_content',
                title: 'modal_title',
                icon: 'modal_icon',
                confirmButton: 'modal_confirm_button',
                cancelButton: 'modal_cancel_button',
            },
            reverseButtons: true,
            heightAuto: false,
        })

        Object.defineProperties(Vue.prototype, {
            $modal: {
                get: () => modal
            }
        })
    }
}