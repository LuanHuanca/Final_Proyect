import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./Details.css"
import InputContainer from '../Componentes/InputContainer'

const Details = () => {
  return (
    <div> 
        <div className="details-header">
            <State state="Tipo de Evento"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>
        
        <div className="details-container">
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
        </div>
        <NavLink to={"/confirme"} ><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default Details