import Modal from './src/main'

Modal.install = function (app) {
    app.component(Modal.name, Modal)
}

export default Modal