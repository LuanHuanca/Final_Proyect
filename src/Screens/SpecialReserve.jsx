import React from 'react'
import State from '../Componentes/State'
import Button from '../Componentes/Button'
import InputContainer from '../Componentes/InputContainer'
import { NavLink } from 'react-router-dom'
import { primeraFaseSpecial, segundaFaseSpecial, ultimaFaseSpecial } from '../services/mostrar'
import "./SpecialReserve.css"
import Confirmed from '../Componentes/Confirmed'

const SpecialReserve = () => {
  return (
    <div>
        <div className="special-reserve-header" id='state'>
            <State state="Tipo de Evento" funcion={primeraFaseSpecial}/>
            <State state="Detalles" funcion={segundaFaseSpecial}/>
        </div>
        

        <div className="special-reserve-type-event" id='special-reserve-type-event'>
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
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBzsCclkaqdej1bU96DII2F2oeMciJ-AO7A&usqp=CAU'></img>
            <Button name="Aceptar" funcion={segundaFaseSpecial}/>
        </div>

        <div className="special-reserve-details" id='special-reserve-details'>
          <InputContainer title={"Hora"} type={"time"} shadow={""}/>
          <InputContainer title={"Fecha"} type={"date"} shadow={""}/>
          <Button name="Confirmar" funcion={ultimaFaseSpecial}/>
        </div>

        <Confirmed/>

    </div>
  )
}

export default SpecialReserve