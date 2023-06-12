import React from 'react'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import './Reserve.css'
import InputContainer from '../Componentes/InputContainer'

const Reserve = () => {
  return (
    <div className='reserve-container'>
      <div className='before-reserve'>
        <p>No tiene reservas hechas</p>
        <NavLink to={"/"}><Button name="Reservar"/></NavLink>
      </div>

      {/* <div className="post-re">
        <State state="Confirmacion"/>
        <InputContainer title={"Cantidad de Personas"} type={"number"} shadow={"6"}/>
        <InputContainer title={"Tipo de evento"} type={"text"} shadow={"Normal"}/>
        <InputContainer title={"Ambiente"} type={"number"} shadow={"Ambiente 1"}/>
        <InputContainer title={"Hora"} type={"time"} shadow={"12:00 p.m."}/>
        <InputContainer title={"Fecha"} type={"date"} shadow={"13/06/2023"}/>
        <Button name={"Editar"}></Button>
        <Button name={"Confirmar"}></Button>
      </div> */}
    </div>
  )
}

export default Reserve