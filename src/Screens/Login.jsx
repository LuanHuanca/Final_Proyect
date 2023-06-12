import React from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = () => {
  const [ci,setCi] = useState("")
  const [password,setPassword] = useState("")

  return (
    <div className='box'>
        <form>
        <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu cedula de identidad"}/>
        <InputContainer 
        title={"Cedula de identidad"} 
        type={"text"}
        valor={ci} 
        shadow={"12345678"}
        action={e => setCi(e.target.value)}
        />
        <InputContainer title={"Contraseña"} type={"password"} shadow={"Introduce tu contraseña"}/>
        <NavLink to={"/Profile"}><Button name={"Inicia Sesión"}/></NavLink>
        <h5 className='text-h5'>No Tienes Cuenta? <NavLink to={"/register"}>Registrate</NavLink></h5>
        </form>
    </div>
  )
}

export default Login