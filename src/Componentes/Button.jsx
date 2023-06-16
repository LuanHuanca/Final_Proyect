import React from 'react'
import './Button.css'

const Button = ({name,funcion,tipo}) => {
  return (
    <div className='button-container'>
        <button 
        onClick={funcion}
        type={tipo}>
            {name}
        </button>
    </div>
  )
}

export default Button
