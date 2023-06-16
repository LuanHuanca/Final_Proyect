import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import "./Unreserve.css"

const Unreserve = () => {
  return (
    <div className='before-reserve' id='sin-reserva'>
        <p>No tiene reservas hechas</p>
         <NavLink to={"/"}><Button name="Reservar" funcion={()=>{}}/></NavLink>
      </div> 
  )
}

export default Unreserve