import React from 'react'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader'
import NavBar from '../Componentes/NavBar'
import State from '../Componentes/State'
import Button from '../Componentes/Profile Screen/Button'
import { NavLink } from 'react-router-dom'
import "./Details.css"
import InputContainer from '../Componentes/Profile Screen/InputContainer'

const Details = () => {
  return (
    <div> 
        <div className="details-header">
            <State state="Detalles"/>
            <State state="Ubicacion de las mesas"/>
            <State state="Confirmacion"/>
        </div>
        
        <div className="details-container">
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
        </div>
        <NavLink to={"/confirme"} ><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default Details