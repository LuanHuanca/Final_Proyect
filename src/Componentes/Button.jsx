import React from 'react'
import './Button.css'

const Button = ({name, funcion}) => {
  return (
    <div className='button-container'>
        <button onClick={() => funcion()}>
            {name}
        </button>
    </div>
  )
}

export default Button
