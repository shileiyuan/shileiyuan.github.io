import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
// import R from 'ramda'

export default function Count2() {
  // const [count, setCount] = useState(0)
  // const [step, setStep] = useState(1)
  const [state, setState] = useState({ step: 1, count: 0 })
  const { step, count } = state
  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      // setCount(count => count + step)
      // setCount(count => count + step)
      setState(({ count, step }) => ({ step, count: count + step }))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <h2>{count}</h2>
      {/* <Button onClick={() => setStep(R.inc)}>{step}</Button> */}
      <Button onClick={() => setState(({ count, step }) => ({ step: step + 1, count }))}>{step}</Button>
    </>
  )
}
