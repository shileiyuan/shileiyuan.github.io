
const context = require.context('./', true, /\.js$/)

const paths = context.keys().filter(path => path !== './index.js')

paths.forEach(path => {
  context(path)
})
