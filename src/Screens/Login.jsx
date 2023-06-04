import React from 'react'
import InputContainer from '../Componentes/Profile Screen/InputContainer.jsx'
import './Login.css'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader.jsx'
import Title from '../Componentes/Profile Screen/Title.jsx'
import Button from '../Componentes/Profile Screen/Button.jsx'

const Login = () => {
  return (
    <div className='box'>
        <ImageHeader/>
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