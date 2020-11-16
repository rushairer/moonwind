import Card from './src/main'

Card.install = function (app) {
    app.component(Card.name, Card)
}

export default Card