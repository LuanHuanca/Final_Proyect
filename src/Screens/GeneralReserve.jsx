import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./GeneralReserve.css"
import InputContainer from '../Componentes/InputContainer'
import { primeraFaseGeneral, segundaFaseGeneral } from '../services/mostrar'

const GeneralReserve = () => {
  return (
    <div>
        <div className='general-reserve-header'>
            <State state="Ambiente" funcion={primeraFaseGeneral}/>
            <State state="Detalles" funcion={segundaFaseGeneral}/>
        </div>


        <div className="general-reserve-ambience" id='general-reserve-ambience'>
          <div className='general-reserve-list'>
          <select name="ambiente" id="ambiente">
                  <option>Ambiente 1</option>
                  <option>Ambiente 2</option>
                  <option>Ambiente 3</option>
                  <option>Ambiente 4</option>
              </select>
          </div>

          <div className='general-slider'>
            <img src="https://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/lu_qing_9.jpg"></img>
            <img src="https://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/lu_qing_11.jpg"></img>
          </div>
        
          <Button name="Aceptar" funcion={segundaFaseGeneral}/>
        </div>
        
        <div className="general-reserve-details" id='general-reserve-details'>
          <InputContainer title={"Personas"} type={"number"} shadow={""} />
          <InputContainer title={"Hora"} type={"time"} shadow={""} />
          <InputContainer title={"Fecha"} type={"date"} shadow={""} />
          <NavLink to={"/"}><Button name="Confirmar" funcion={()=>{}}/></NavLink>
        </div>    
    </div>
  )
}

export default GeneralReserve