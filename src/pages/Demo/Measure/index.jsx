import React, { useState, useCallback } from 'react'

export default function Measure() {
  const [width, setWidth] = useState(0)

  const measuredRef = useCallback(node => {
    // console.log(node === document.querySelector('h1'))
    // console.log(node)
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width)
    }
  }, [])

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(width)}px broad</h2>
    </>
  )
}
