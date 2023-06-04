import React from 'react'
import InputContainer from '../Componentes/Profile Screen/InputContainer.jsx'
import './Login.css'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader.jsx'
import Title from '../Componentes/Profile Screen/Title.jsx'
import Button from '../Componentes/Profile Screen/Button.jsx'
import Text from '../Componentes/Profile Screen/Text.jsx'

const Login = () => {
  return (
    <div className='box'>
        <ImageHeader/>
        <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu correo electrónico"}/>
        <Text texto={"Email"}/>
        <InputContainer type={"text"} shadow={"example@gmail.com"}/>
        <Text texto={"Contraseña"}/>
        <InputContainer type={"password"} shadow={"Introduce tu contraseña"}/>
        <Button name={"Inicia Sesión"}/>
        <h5 className='text-h5'>
          No Tienes Cuenta?
          <a href='http://localhost:5173/register'>Registrate</a>
        </h5>
    </div>
  )
}

export default Login