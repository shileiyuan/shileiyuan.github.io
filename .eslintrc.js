// off: 0; warn: 1; error: 2
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true
  },
  globals: {
    $: 'readonly'
  },
  extends: [
    'standard',
    'standard-react'
    // 如果eslint的规则于prettier的规则冲突，这个插件会让eslint的规则失效，以prettier的规则为准
    // 所以这些冲突的规则只需要在prettier中定义就行了，下面的rules里面不需要重新写一遍了
    // 'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': 'off',
    'quote-props': ['error', 'consistent']
  }
}
