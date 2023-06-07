import React from 'react'
import "./State.css"

const State = ({state, color, text}) => {
  return (
    <div className='state-container' style={{background: {color}, color: {text}}}>
        {state}
    </div>
  )
}

export default State