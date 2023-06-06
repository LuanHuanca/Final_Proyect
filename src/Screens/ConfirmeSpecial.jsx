import React from 'react'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader'
import NavBar from '../Componentes/NavBar'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Profile Screen/Button'
import "./ConfirmeSpecial.css"

const ConfirmeSpecial = () => {
  return (
    <div>
        <ImageHeader/>
        <div className="confirme-header">
            <State state="Tipo de Evento"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>
        
        <div className="confirme-container">
            <span>Tipo de evento:</span>
            <input type="text" />
            <span>Personas:</span>
            <input type="Number" />
            <span>Hora:</span>
            <input type="time"  />
            <span>Fecha:</span>
            <input type="date"/>
            <span>Mesa:</span>
            <input type="text" />
        </div>
        <NavLink><Button name="Aceptar"/></NavLink>
        <NavBar/>
    </div>
  )
}

export default ConfirmeSpecial