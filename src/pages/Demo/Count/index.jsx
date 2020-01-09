import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import R from 'ramda'

export default function Count() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'abc' })
  console.log('render1')

  useEffect(() => {
    function handleResize() {
      console.log(count)
    }
    window.addEventListener('resize', handleResize)
    console.log('add')
    return () => {
      console.log('remove')
      window.removeEventListener('resize', handleResize)
    }
  }, [count])

  useEffect(() => {
    // const id = setInterval(() => {
    //   setCount(R.inc)
    // }, 1000)
    // return () => clearInterval(id)
  }, [])

  function handleClickUser() {
    const name = user.name === 'abc' ? 'def' : 'abc'
    const newUser = { ...user, name }
    setUser(newUser)
  }
  console.log('render2')
  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => setCount(count + 1)}>click</Button>
      <hr />
      <h2>{user.name}</h2>
      <Button onClick={handleClickUser}>setUser</Button>
    </>
  )
}
