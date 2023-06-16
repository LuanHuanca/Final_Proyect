import React from 'react'
import State from '../Componentes/State'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button'
import './Reserve.css'
import InputContainer from '../Componentes/InputContainer'
import ReserveCard from '../Componentes/ReserveCard'
import { edit, reserve } from '../services/mostrar'
import reserved from "../assets/reserve.json"

const Reserve = () => {
  return (
    <div className='reserve-container' >
      <div className="reserve" id='reserve'>
        <State state="Confirmacion" funcion={()=>{}}/>
        <ReserveCard 
          cliente={"Josu"} 
          tipo={reserved.tipo} 
          ambiente={reserved.ambiente} 
          fecha={reserved.fecha} 
          hora={reserved.hora} 
          cantidad={reserved.cantidad} 
          code={"123cod"} 
          estado={"pendiente"} 
          color={"red"} 
          key={reserved.id}
        />
        <Button name={"Editar"} funcion={edit}></Button>
        <NavLink to={"/reserved"}><Button name={"Confirmar"} funcion={()=>{}}></Button></NavLink>
        <NavLink to={"/unreserved"}><Button name={"Cancelar"} funcion={()=>{}}></Button></NavLink>
      </div>

      <div className="edit" id='edit'>
        <div className="details">
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
          <InputContainer title={"Ambiente"} type={"number"} shadow={""}/>
          <InputContainer title={"Cantidad de Personas"} type={"number"} shadow={""}/>
        </div>
        
        <Button name={"Cancelar"} funcion={reserve}/>
        <Button name={"Confirmar"} funcion={reserve}/>
      </div>

    </div>
  )
}

export default Reserve