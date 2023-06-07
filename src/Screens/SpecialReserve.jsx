import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./SpecialReserve.css"

const SpecialReserve = () => {
  return (
    <div>
        <div className="reserve-header">
            <State state="Tipo de Evento" />
            <State state="Detalles" color="#CD3131" Text="#000000"/>
            <State state="Confirmacion"/>
        </div>
        

        <div className="reserve-container">
            <select name="evento" id="evento">
                <option>Evento</option>
                <option>Cena Matrimonial</option>
                <option>Aniversario</option>
                <option>Negocios</option>
                <option>15 años</option>
                <option>Bautizo</option>
                <option>Graduacion</option>
                <option>Otros</option>
            </select>
        </div>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBzsCclkaqdej1bU96DII2F2oeMciJ-AO7A&usqp=CAU'></img>

        <NavLink to={"/details"}><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default SpecialReserve