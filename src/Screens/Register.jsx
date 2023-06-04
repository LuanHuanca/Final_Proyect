import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/Profile Screen/InputContainer.jsx'
import ImageHeader from '../Componentes/Profile Screen/ImageHeader.jsx'
import Title from '../Componentes/Profile Screen/Title.jsx'
import Button from '../Componentes/Profile Screen/Button.jsx'
import Text from '../Componentes/Profile Screen/Text'

const Register = () => {
  return (
    <div >
        <ImageHeader/>
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
        <Text texto={"Nombre Completo"}/>
        <InputContainer type={"text"} shadow={"Josue Romay Torrejon"}/>
        <Text texto={"Email"}/>
        <InputContainer type={"text"} shadow={"example@gmail.com"}/>
        <Text texto={"Contraseña"}/>
        <InputContainer type={"password"} shadow={"Introduce tu contraseña"}/>
        <Button name={"Crear Cuenta"}/>
        <h5 className='text-h5'>
            Ya Tienes una Cuenta?
            <a href='http://localhost:5173/'>Inicia Sesion</a>
        </h5>
    </div>
  )
}

export default Register
