import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./GeneralReserve.css"

const GeneralReserve = () => {
  return (
    <div>
        <div className='general-reserve-header'>
            <State state="Ambiente"/>
            <State state="Detalles"/>
            <State state="Confirmacion"/>
        </div>

        <div className='general-reserve-list'>
        <select name="ambiente" id="ambiente">
                <option>Ambiente 1</option>
                <option>Ambiente 2</option>
                <option>Ambiente 3</option>
                <option>Ambiente 4</option>
            </select>
        </div>

        <div className='general-envi-slider'>
          <img src="https://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/lu_qing_9.jpg"></img>
          <img src="https://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/lu_qing_11.jpg"></img>
          
        </div>
        <NavLink to={"/gdetails"}><Button name="Aceptar"/></NavLink>
    </div>
  )
}

export default GeneralReserve