import React from 'react'
import './InputContainer.css'

const InputContainer = ( {type,shadow}) => {
  return (
    <div className='container'>
      <div className='input-container'>
      <input type={type} placeholder={shadow}/>
      </div>
    </div>
  )
}

export default InputContainer
