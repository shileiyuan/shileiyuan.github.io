import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import API from '@/utils/api'

export default function Users(props) {
  const [list, setList] = useState([])
  const [obj, setObj] = useState({ name: 'abc' })
  useEffect(() => {
    const queryUsers = async () => {
      const res = await API.get.queryUsers()
      setList(res.data)
    }
    queryUsers()
  }, [])

  function handleChange(valueObj) {
    console.log(valueObj)
    // const value = { ...obj, ...valueObj }
    const value = Object.assign(obj, valueObj)
    setObj(value)
  }

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Input value={obj.name} onChange={e => handleChange({ name: e.target.value })} />
    </div>
  )
}
