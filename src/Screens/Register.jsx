import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink } from 'react-router-dom'
import Text from '../Componentes/Profile Screen/Text'

const Register = () => {
  return (
    <div >
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
        <h4 className='container-text'>Nombre Completo</h4>
        <InputContainer type={"text"} shadow={"Josue Romay Torrejon"}/>
        <h4 className='container-text'>Email</h4>
        <InputContainer type={"text"} shadow={"example@gmail.com"}/>
        <h4 className='container-text'>Contraseña</h4>
        <InputContainer type={"password"} shadow={"Introduce tu contraseña"}/>
        <Button name={"Crear Cuenta"}/>
        <h5 className='text-h5'>Ya Tienes una Cuenta? Inicia Sesion</h5>
    </div>
  )
}

export default Register
