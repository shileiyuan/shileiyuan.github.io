import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from 'antd'

export default function Count() {
  const [count, setCount] = useState(0)

  const lastCount = useRef(0)
  lastCount.current = count

  const handleResize = useCallback(() => {
    console.log(lastCount.current)
  }, [lastCount])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => setCount(count + 1)}>click</Button>
    </>
  )
}
