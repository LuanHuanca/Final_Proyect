import React from 'react'
import './InputContainer.css'

const InputContainer = ({title, type, shadow}) => {
  return (
    <div className='container'>
      <h4>{title}</h4>
      <div className='input-container'>
        <input type={type} placeholder={shadow}/>
      </div>
    </div>
  )
}

export default InputContainer
