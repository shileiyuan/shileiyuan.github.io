/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'antd'

function Func() {
  const [user, setUser] = useState('abc')
  return (
    <div>
      <ProfilePage3 user={user} />
      <Button onClick={() => setUser(user === 'abc' ? 'def' : 'abc')}>change</Button>
    </div>
  )
}

function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user)
  }

  const handleClick = () => {
    setTimeout(showMessage, 2000)
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Button onClick={handleClick}>Follow</Button>
    </div>
  )
}

class ProfilePage2 extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user)
  }

  handleClick = () => {
    setTimeout(this.showMessage, 2000)
  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <Button onClick={this.handleClick}>Follow</Button>
      </div>
    )
  }
}

class ProfilePage3 extends React.Component {
  render() {
    const props = this.props
    const handleClick = () => {
      setTimeout(showMessage, 1000)
    }
    const showMessage = () => {
      alert('Followed ' + props.user)
    }
    return (
      <div style={{ marginBottom: 20 }}>
        <Button onClick={handleClick}>Follow</Button>
      </div>
    )
  }
}

function MessageThread() {
  const [message, setMessage] = useState({ name: 'abc' })
  const handleSendClick = () => {
    const newMessage = {
      ...message,
      name: 'def'
    }
    setMessage(newMessage)
  }
  return (
    <>
      {message.name}
      <button onClick={handleSendClick}>Send</button>
    </>
  )
}

export default MessageThread
