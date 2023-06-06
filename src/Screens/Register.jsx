import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/Profile Screen/InputContainer.jsx'
import Title from '../Componentes/Profile Screen/Title.jsx'
import Button from '../Componentes/Profile Screen/Button.jsx'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div >
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
        <InputContainer title={"Nombre Completo"} type={"text"} shadow={"Josue Romay Torrejon"}/>
        <InputContainer title={"Email"} type={"text"} shadow={"example@gmail.com"}/>
        <InputContainer title={"Contraseña"} type={"password"} shadow={"Introduce tu contraseña"}/>
        <Button name={"Crear Cuenta"}/>
        <h5 className='text-h5'>Ya Tienes una Cuenta? <NavLink to={"/login"}>Inicia Sesion</NavLink></h5>
    </div>
  )
}

export default Register
