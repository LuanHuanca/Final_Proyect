import React from 'react'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader'
import NavBar from '../Componentes/NavBar'
import State from '../Componentes/State'
import Button from '../Componentes/Profile Screen/Button'
import { NavLink } from 'react-router-dom'
import "./Details.css"

const Details = () => {
  return (
    <div>
        <ImageHeader/>
        <div className="details-header">
            <State state="Detalles"/>
            <State state="Ubicacion de las mesas"/>
            <State state="Confirmacion"/>
        </div>
        
        <div className="details-container">
            <span>Hora:</span>
            <input type='time'></input>
            <span>Fecha:</span>
            <input type='date'></input>
        </div>
        <NavLink to={"/confirmeS"} ><Button name="Aceptar"/></NavLink>
        <NavBar/>
    </div>
  )
}

export default Details