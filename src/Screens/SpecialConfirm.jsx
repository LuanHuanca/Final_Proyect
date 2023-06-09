import React from 'react'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import "./SpecialConfirm.css"
import InputContainer from '../Componentes/InputContainer'

const SpecialConfirm = () => {
  return (
    <div>
        <div className="confirme-header">
            <State state="Tipo de Evento"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>
        
        <div className="confirme-container">
          <InputContainer title={"Tipo de evento"} type={"text"} shadow={""}/>
          <InputContainer title={"Personas"} type={"Number"} shadow={""}/>
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
          <InputContainer title={"Mesa:"} type={"text"} shadow={""}/>
        </div>
        <NavLink to={"/"}><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default SpecialConfirm