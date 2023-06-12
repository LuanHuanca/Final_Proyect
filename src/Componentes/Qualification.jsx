import React from 'react'
import "./Qualification.css"
import { Icon } from '@iconify/react'

const Qualification = () => {
  return (
    <div className='qualification-container'>
      <div className='rank'>
        <Icon icon={"material-symbols:star"}/>
        <span>(<input type="number" placeholder='0.0'/>)</span>
      </div>
      
      
      <input className='comment' type="" placeholder='enviar un comentario'/>
      <div className="button"><Icon icon={"quill:send"}/></div>
    </div>
  )
}

export default Qualification