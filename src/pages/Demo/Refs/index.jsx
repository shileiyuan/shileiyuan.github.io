import React, { Component, useRef } from 'react'

export default function Refs() {
  const ref = useRef()
  return (
    <CustomTextInput ref={ref} />
  )
}

class CustomTextInput extends Component {
  textInput = React.createRef()

  focusTextInput = () => {
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <input
          type='text'
          ref={this.textInput}
        />

        <input
          type='button'
          value='Focus the text input'
          // eslint-disable-next-line react/jsx-handler-names
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}
