import React from 'react'
import './InputContainer.css'

const InputContainer = ({title, type, shadow,action}) => {
  return (
    <div className='container'>
      <h4>{title}</h4>
      <div className='input-container'>
        <input 
        type={type}
        placeholder={shadow}
        onChange={action}
        />
      </div>
    </div>
  )
}

export default InputContainer
