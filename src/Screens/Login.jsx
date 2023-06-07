import React from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='box'>
        <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu correo electrónico"}/>
        <InputContainer title={"Email"} type={"text"} shadow={"example@gmail.com"}/>
        <InputContainer title={"Contraseña"} type={"password"} shadow={"Introduce tu contraseña"}/>
        <NavLink to={"/"}><Button name={"Inicia Sesión"}/></NavLink>
        <h5 className='text-h5'>No Tienes Cuenta? <NavLink to={"/register"}>Registrate</NavLink></h5>
    </div>
  )
}

export default Login