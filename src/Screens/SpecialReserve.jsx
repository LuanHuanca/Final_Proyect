import React from 'react'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader'
import NavBar from '../Componentes/NavBar'
import State from '../Componentes/State'
import "./SpecialReserve.css"
import Button from '../Componentes/Profile Screen/Button'
import { NavLink } from 'react-router-dom'

const SpecialReserve = () => {
  return (
    <div>
        <ImageHeader/>
        <div className="reserve-header">
            <State state="Tipo de Evento"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBzsCclkaqdej1bU96DII2F2oeMciJ-AO7A&usqp=CAU'></img>

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
        <NavLink to={"/details"}><Button name="Aceptar"/></NavLink>
        <NavBar/>
    </div>
  )
}

export default SpecialReserve