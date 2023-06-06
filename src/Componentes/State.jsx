import React from 'react'
import "./State.css"

const State = ({state}) => {
  return (
    <div className='state-container'>
        {state}
    </div>
  )
}

export default State