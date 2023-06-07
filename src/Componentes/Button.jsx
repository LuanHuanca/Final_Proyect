import React from 'react'
import './Button.css'

const Button = ({name}) => {
  return (
    <div className='button-container'>
        <button>
            {name}
        </button>
    </div>
  )
}

export default Button
