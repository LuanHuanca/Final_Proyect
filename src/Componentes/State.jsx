import React from 'react'
import "./State.css"

const State = ({state, funcion}) => {
  return (
    <div className='state-container' onClick={() => funcion()}>
        {state}
    </div>
  )
}

export default State