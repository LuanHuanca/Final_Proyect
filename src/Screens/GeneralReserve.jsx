import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'
import "./GeneralReserve.css"
import InputContainer from '../Componentes/InputContainer'
import { primeraFaseGeneral, segundaFaseGeneral, ultimaFaseGeneral } from '../services/mostrar'
import Confirmed from '../Componentes/Confirmed'

const GeneralReserve = () => {
  return (
    <div>
        <div className='general-reserve-header' id='state'>
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
           <img src="../static/image/ambiente/ambiente_1.jpg" alt="" /> 
           <img src="../static/image/ambiente/ambiente_2.jpg" alt="" /> 
           <img src="../static/image/ambiente/ambiente_3.jpg" alt="" /> 
           <img src="../static/image/ambiente/ambiente_4.jpg" alt="" /> 
          </div>
        
          <Button name="Aceptar" funcion={segundaFaseGeneral}/>
        </div>
        
        <div className="general-reserve-details" id='general-reserve-details'>
          <InputContainer title={"Personas"} type={"number"} shadow={""} />
          <InputContainer title={"Hora"} type={"time"} shadow={""} />
          <InputContainer title={"Fecha"} type={"date"} shadow={""} />
          <Button name="Confirmar" funcion={ultimaFaseGeneral}/>
        </div>    

        <Confirmed/>

    </div>
  )
}

export default GeneralReserve