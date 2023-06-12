import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';


const Register = () => {

  const [ci,setCi] = useState(0);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const add = ()=>{
    Axios.post("http://localhost:5173/register",{
      ci:ci,
      username:username,
      password:password,
      email:email
    }).then(()=>{
      alert("Cliente registrado");
    });
  }

  return (
    <div >
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
        <InputContainer 
        title='Cedula de identidad'
        type="number"
        shadow="12345678"
        action={setCi}
        />
        <InputContainer 
        title='Nombre Completo'
        type="text"
        shadow="Josue Romay Torrejon"
        action={setUsername}
        />
        <InputContainer
        title='Email'
        type="text"
        shadow="example@gmail.com"
        action={setEmail}
        />
        <InputContainer
        title='Contraseña'
        type={"password"}
        shadow={"Introduce tu contraseña"}
        action={setPassword}
        />
        <NavLink to={"/login"}>
          <Button 
          name="Crear Cuenta"
          funcion={add}
          />
        </NavLink>
        <h5 className='text-h5'>Ya Tienes una Cuenta? <NavLink to={"/login"}>Inicia Sesion</NavLink></h5>
    </div>
  )
}

export default Register
