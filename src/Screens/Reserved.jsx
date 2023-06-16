import React from 'react'
import State from '../Componentes/State'
import ReserveCard from '../Componentes/ReserveCard'
import reserved from "../assets/reserve.json"


const Reserved = () => {
  return (
    <div>
        <State state="Confirmacion" funcion={()=>{}}/>
        <ReserveCard 
            cliente={"Josu"} 
            tipo={reserved.tipo} 
            ambiente={reserved.ambiente} 
            fecha={reserved.fecha} 
            hora={reserved.hora} 
            cantidad={reserved.cantidad} 
            code={"123cod"} 
            estado={"Confirmado"} 
            color={"#10d420"} 
            key={reserved.id}
        />
    </div>
  )
}

export default Reserved