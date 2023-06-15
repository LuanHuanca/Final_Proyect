import React from 'react'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import './Reserve.css'
import InputContainer from '../Componentes/InputContainer'
import ReserveCard from '../Componentes/ReserveCard'
import { reservar } from '../services/mostrar'

const Reserve = () => {
  return (
    <div className='reserve-container'>
      <div className='before-reserve' id='sin-reserva'>
        <p>No tiene reservas hechas</p>
{/*         <NavLink to={"/"}><Button name="Reservar" funcion={()=>{}}/></NavLink>
 */}        <Button name="Reservar" funcion={reservar}/>
      </div> 

      <div className="post-reserve" id='con-reserva'>
        <State state="Confirmacion" funcion={()=>{}}/>
        <ReserveCard cliente={"Josu"} tipo={"General"} ambiente={"1"} fecha={"16/06/2023"} hora={"14:00 pm"} cantidad={"1"}/>
        <Button name={"Editar"} funcion={()=>{}}></Button>
        <Button name={"Confirmar"} funcion={()=>{}}></Button>
      </div>
    </div>
  )
}

export default Reserve