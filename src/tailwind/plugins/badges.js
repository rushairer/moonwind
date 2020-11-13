const _ = require('lodash')
const Color = require('color')

module.exports = function () {

    return function ({
        addComponents,
        theme,
        e
    }) {
        const options = {
            padding: '.25rem .4rem',
            fontSize: '75%',
            borderRadius: '.25rem',
            pillBorderRadius: '10rem',
            pillPadding: '.25rem .6rem',
            cornerBorderRadius: '18rem',
            cornerPadding: '.25rem .4rem',
            cornerFontSize: '25%',
            lineHeight: '1',
            colors: {
                ...theme('componentColors')
            },
        }
        const badgeComponents = [{
            '.badge': {
                display: 'inline-block',
                padding: options.padding,
                fontSize: options.fontSize,
                borderRadius: options.borderRadius,
                lineHeight: options.lineHeight,
            },
            '.badge-pill': {
                borderRadius: options.pillBorderRadius,
                padding: options.pillPadding,
            },
            '.badge-corner': {
                borderRadius: options.cornerBorderRadius,
                padding: options.cornerPadding,
                fontSize: options.cornerFontSize,
                position: 'absolute',
                top: '-.4rem',
                right: '-.4rem',
            }
        },
        ..._.map(options.colors, (colorOptions, name) => {
            return {
                [`.badge-${e(name)}`]: {
                    backgroundColor: colorOptions.background,
                    color: colorOptions.text,
                },
                [`a.badge-${e(name)}`]: {
                    '&:hover': {
                        backgroundColor: Color(colorOptions.background).darken(0.1).hex().toString(),
                    },
                }
            }
        })
        ]
        addComponents(badgeComponents)
    }
}