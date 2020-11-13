const _ = require('lodash')

module.exports = function () {

    return function ({
        addUtilities,
        e
    }) {
        const rotate = {
            '1/8': '45deg',
            '1/4': '90deg',
            '3/8': '135deg',
            '1/2': '180deg',
            '5/8': '225deg',
            '3/4': '270deg',
            '7/8': '315deg',
        }
        const rotateUtilities = _.map(rotate, (value, key) => {
            return {
                [`.${e(`rotate-${key}`)}`]: {
                    transform: `rotate(${value})`
                }
            }
        })

        addUtilities(rotateUtilities)
    }
}