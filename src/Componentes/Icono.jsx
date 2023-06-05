import React from 'react'
import { Icon } from '@iconify/react';

import "./Icono.css"

const Icono = ({name, icon}) => {
  return (
    <div className='icon-container'>
      <span>{name}</span>
      <Icon className='icon' icon={icon}/>  
    </div>
  )
}

export default Icono