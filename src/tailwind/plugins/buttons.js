const _ = require('lodash')
const Color = require('color')

module.exports = function () {
    return function ({
        addComponents,
        theme,
        e
    }) {
        const options = {
            fontWeight: theme('fontWeight.medium'),
            fontSize: theme('fontSize.base'),
            lineHeight: theme('lineHeight.normal'),
            padding: '.375rem .75rem',
            colors: {
                default: {
                    text: theme('colors.gray.600'),
                },
                link: {
                    background: theme('colors.transparent'),
                    hoverBackground: theme('colors.transparent'),
                    activeBackground: theme('colors.transparent'),
                    text: theme('colors.blue.500'),
                    activeText: theme('colors.blue.800'),
                },
                ...theme('componentColors')
            },
            sizes: {
                sm: {
                    fontSize: theme('fontSize.sm'),
                    lineHeight: theme('lineHeight.normal'),
                    padding: '.25rem .5rem',
                },
                lg: {
                    fontSize: theme('fontSize.xl'),
                    lineHeight: theme('lineHeight.normal'),
                    padding: '.5rem 1rem',
                }
            }
        }
        const buttonComponents = [{
            '.btn': {
                display: 'inline-block',
                padding: options.padding,
                fontSize: options.fontSize,
                fontWeight: options.fontWeight,
                lineHeight: options.lineHeight,
                textDecoration: 'none',
                color: options.colors.default.text,
                backgroundColor: options.colors.default.background,
                '&:disabled, &.disabled': {
                    pointerEvents: 'none',
                    color: Color(options.colors.default.text).lighten(0.2).hex().toString(),
                },
                '&:hover': {
                    color: Color(options.colors.default.text).darken(0.3).hex().toString(),
                },
            },
            '.btn-link': {
                '&:hover': {
                    textDecoration: 'underline'
                }
            },
        },
        ..._.map(options.sizes, (sizeOptions, name) => {
            return {
                [`.btn-${e(name)}`]: {
                    padding: _.get(sizeOptions, 'padding', options.padding),
                    fontSize: _.get(sizeOptions, 'fontSize', options.fontSize),
                    fontWeight: _.get(sizeOptions, 'fontWeight', options.fontWeight),
                    lineHeight: _.get(sizeOptions, 'lineHeight', options.lineHeight),
                },
            }
        }),
        ..._.map(_.omit(options.colors, 'default', 'white', 'link'), (colorOptions, name) => {
            return {
                [`.btn-${e(name)}`]: {
                    backgroundColor: colorOptions.background,
                    color: colorOptions.text,
                    '&:focus, &.focus': {
                        outline: 0,
                        boxShadow: `0 0 0 .2em ${Color(colorOptions.background).alpha(.5).rgb().toString()}`,
                    },
                    '&:disabled, &.disabled': {
                        backgroundColor: _.get(colorOptions, 'hoverBackground', Color(colorOptions.background).lighten(0.2).hex().toString()),
                        color: Color(colorOptions.text).lighten(0.2).hex().toString(),
                    },
                    '&:hover': {
                        backgroundColor: _.get(colorOptions, 'hoverBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
                        color: _.get(colorOptions, 'hoverText', colorOptions.text),
                    },
                    '&:active, &.active': {
                        backgroundColor: _.get(colorOptions, 'activeBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
                        color: _.get(colorOptions, 'activeText', colorOptions.text),
                    }
                },
                [`.btn-outline-${e(name)}`]: {
                    backgroundColor: theme('colors.white'),
                    color: colorOptions.background,
                    borderColor: colorOptions.background,
                    borderWidth: '.05em',
                    '&:focus, &.focus': {
                        outline: 0,
                        boxShadow: `0 0 0 .2em ${Color(colorOptions.background).alpha(.5).rgb().toString()}`,
                    },
                    '&:disabled, &.disabled': {
                        backgroundColor: _.get(colorOptions, 'hoverBackground', Color(colorOptions.background).lighten(0.2).hex().toString()),
                        color: Color(colorOptions.text).lighten(0.2).hex().toString(),
                    },
                    '&:hover': {
                        backgroundColor: _.get(colorOptions, 'hoverBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
                        color: _.get(colorOptions, 'hoverText', colorOptions.text),
                    },
                    '&:active, &.active': {
                        backgroundColor: _.get(colorOptions, 'activeBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
                        color: _.get(colorOptions, 'activeText', colorOptions.text),
                    }
                }
            }
        })
        ]
        addComponents(buttonComponents)
    }
}