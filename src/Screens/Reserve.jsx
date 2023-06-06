import React from 'react'
import State from '../Componentes/State'
import InputContainer from '../Componentes/Profile Screen/InputContainer'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Profile Screen/Button'
import './Reserve.css'

const Reserve = () => {
  return (
    <div>
        <State state="Confirmacion"/>
        <div className="reserved-container">
          <InputContainer title={"Tipo de evento"} type={"text"} shadow={""}/>
          <InputContainer title={"Personas"} type={"Number"} shadow={""}/>
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
          <InputContainer title={"Mesa:"} type={"text"} shadow={""}/>
        </div>
        <NavLink to={"/reserve"}><Button name="Editar"/></NavLink>
    </div>
  )
}

export default Reserve