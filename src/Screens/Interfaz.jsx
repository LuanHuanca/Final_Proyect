import React from 'react'
import './Interfaz.css'
import { NavLink } from 'react-router-dom'
import Button from '../Componentes/Button.jsx'

function Interfaz() {
  return (
    <div>
      
      <div className='frase'>
        <h3>Comida Deliciosa Vida Deliciosa</h3> 
      </div> 
      <br></br>

      <div className='imagen'>
         <img src="../../static/image/imagen.jpg"/>
      </div>
      <br></br>
      <br></br>

     <NavLink to={"/login"}><Button name={"EMPEZAR"}/></NavLink>
      <br></br>
      <br></br>
     
      <div className='caja'>
            RESERVA TU MESA YA!
      </div>
  
      
 
    </div>
        
    
  )
}

export default Interfaz