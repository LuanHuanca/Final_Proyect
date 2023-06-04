import React from 'react'
import './Title.css'

const Title = ({title,context}) => {
  return (
    <div className='title-container'>
      <h4>{title}</h4>
      <p>{context}</p>
    </div>
  )
}

export default Title
