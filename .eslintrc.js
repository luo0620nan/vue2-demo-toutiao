module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unexpected-multiline':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
