module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/recommended',
        'prettier',
    ],
    globals: {
        __static: true
    },
    plugins: ['vue'],
    rules: {
        'vue/no-unused-vars': 'warn',
        'vue/max-attributes-per-line': 'off',
        'vue/no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'semi': ['warn', 'never'],
        'quotes': ['warn', 'single'],
        'indent': ['warn', 4, { 'SwitchCase': 1 }]
    }
}