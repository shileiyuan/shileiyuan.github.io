import React, { useEffect, useReducer } from 'react'
import { Button } from 'antd'

export default function Count3() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { step, count } = state
  useEffect(() => {
    console.log('effect')
    const timer = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => dispatch({ type: 'step', step: step + 1 })}>{step}</Button>
    </>
  )
}

const initialState = {
  step: 1,
  count: 0
}

function reducer(state, action) {
  const { step, count } = state
  if (action.type === 'tick') {
    return { count: count + step, step }
  } else if (action.type === 'step') {
    return { count, step: action.step }
  } else {
    throw new Error()
  }
}
