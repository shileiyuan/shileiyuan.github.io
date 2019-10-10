import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(Main)

if(module.hot) {
  module.hot.accept('./Main', () => {
    render(Main)
  })
}