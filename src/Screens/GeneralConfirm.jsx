import React from 'react'
import State from '../Componentes/State'
import InputContainer from '../Componentes/InputContainer'
import Button from '../Componentes/Button'
import "./GeneralConfirm.css"
import { NavLink } from 'react-router-dom'


function GeneralConfirm() {
  return (
    <div className="confirm-container">
        <div className='general-confirm-header'>
            <State state="Ambiente"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>
        <div className="confirm-details">
          <InputContainer title={"Ambiente"} type={"number"} shadow={""}/>
          <InputContainer title={"Personas"} type={"number"} shadow={""}/>
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
        </div>
        <NavLink to={"/"}><Button name="Confirmar"/></NavLink>
    </div>
  )
}

export default GeneralConfirm