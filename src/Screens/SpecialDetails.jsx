import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./SpecialDetails.css"
import InputContainer from '../Componentes/InputContainer'

const SpecialDetails = () => {
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
        <NavLink to={"/special/confirm"} ><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default SpecialDetails