module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'usage' }],
    '@babel/preset-react'
  ],
  plugins: ['syntax-dynamic-import']
}
