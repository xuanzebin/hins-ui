const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'html'],
  env: {
    node: true,
    jasmine: true,
    jest: true,
    browser: true,
    es6: true,
  },
  rules: {
    'react/display-name': 'off',
    'react/no-find-dom-node': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-console': 'warn',
    'no-param-reassign': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    semi: 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'react/no-deprecated': 'off',
    'lines-between-class-members':["error"],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 'warn',
    'prettier/prettier': 'off',
    'no-empty': 'off'
  },
  globals: {
    $: true,
    pageConfig: true,
    promotional: true,
    watermark: true,
    _: true,
    seajs: true,
    Promos: true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['webpack.config.*', 'config/*', 'test/*', 'jest.config.*', 'script/*'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
