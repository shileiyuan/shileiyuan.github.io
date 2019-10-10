import React, { Component } from 'react'
import { test } from '~/utils/common'

export default class Main extends Component {
  render() {
    return (
      <div>
        <button onClick={test}>click</button>
      </div>
    )
  }
}
