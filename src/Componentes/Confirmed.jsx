import React from 'react'
import "./Confirmed.css"
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { reservar } from '../services/mostrar'

const Confirmed = () => {
  return (
    <div className="confirmed-container" id='confirmed'>
      <span>Reserva realizada exitosamente</span>
      <NavLink to={"/"}><Button name={"Volver"} funcion={()=>{}}/></NavLink>
    </div>
  )
}

export default Confirmed