import React from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import './Login.css'
import { NavLink } from 'react-router-dom'
import Text from '../Componentes/Profile Screen/Text.jsx'

const Login = () => {
  return (
    <div className='box'>
        <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu correo electrónico"}/>
        <h4 className='container-text'>Email</h4>
        <InputContainer type={"text"} shadow={"example@gmail.com"}/>
        <h4 className='container-text'>Contraseña</h4>
        <InputContainer type={"password"} shadow={"Introduce tu contraseña"}/>
        <Button name={"Inicia Sesión"}/>
        <h5 className='text-h5'>No Tienes Cuenta? Registrate</h5>
    </div>
  )
}

export default Login