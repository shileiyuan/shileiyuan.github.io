import React from 'react'
import Diagram from './Diagram'
import Tools from './Tools'
import DragBox from './DragBox'

export default function DiagramDemo(props) {
  return (
    <Diagram>
      <Tools />
      <DragBox />
    </Diagram>
  )
}
