import React from 'react'
import './Text.css'

const Text = ({texto}) => {
  return (
    <div className='container-text'>
      <h4>{texto}</h4>
    </div>
  )
}

export default Text
