import React from 'react'
import State from '../Componentes/State'
import InputContainer from '../Componentes/InputContainer'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import "./GenConfirm.css"


function GenConfirm() {
  return (
    <div>
        <div className='general-confirm-header'>
            <State state="Ambiente"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>

        <div className="confirm-container">
          <InputContainer title={"Ambiente"} type={"number"} shadow={""}/>
          <InputContainer title={"Personas"} type={"number"} shadow={""}/>
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
        </div>
        <NavLink to={"/"}><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default GenConfirm