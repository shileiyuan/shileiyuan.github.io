import React, { useState, useEffect } from 'react'
import API from '@/utils/api'

export default function Users(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    const queryUsers = async () => {
      const res = await API.get.queryUsers()
      setList(res.data)
    }
    queryUsers()
  }, [])

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
