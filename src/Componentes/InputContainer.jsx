import React from 'react'
import './InputContainer.css'

const InputContainer = ({title, type, shadow,action,valor}) => {
  return (
    <div className='container'>
      <h4>{title}</h4>
      <div className='input-container'>
        <input 
        type={type}
        value={valor} 
        placeholder={shadow}
        onChange={(event)=>{
          {`set${action}`}(event.target.value);
        }}/>
      </div>
    </div>
  )
}

export default InputContainer
