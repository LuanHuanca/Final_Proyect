import React from 'react'
import "./ReserveCard.css"

const ReserveCard = ({cliente, tipo, ambiente, fecha, hora, cantidad, code, estado, color}) => {
  return (
    <div className='reservecard-container'>
        <div className="reserve-header" style={{backgroundColor: color}}>
            <span>Reserva</span>
        </div>

        <div className="line"></div>

        <div className="reserve-body">
            <p><span>Cliente: </span>{cliente}</p>
            <p><span>Tipo de Reserva: </span>{tipo}</p>
            <p><span>Ambiente: </span>{ambiente}</p>
            <p><span>Fecha: </span>{fecha}</p>
            <p><span>Hora: </span>{hora}</p>
            <p><span>Cantidad de Personas: </span>{cantidad}</p>
            <p><span>Codigo Mesa: </span>{code}</p>
            <p><span>Estado: </span>{estado}</p>
        </div>
    </div>
  )
}

export default ReserveCard