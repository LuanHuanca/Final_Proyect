import React from 'react'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import './Reserve.css'

const Reserve = () => {
  return (
    <div>
        <State state="Confirmacion"/>
        <div className="reserved-container">
          <span>No tiene reservas hechas</span>   
        </div>
        <NavLink to={"/"}><Button name="Reservar"/></NavLink>
    </div>
  )
}

export default Reserve