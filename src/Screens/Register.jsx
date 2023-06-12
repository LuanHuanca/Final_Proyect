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

  const agregar_cliente = ()=>{
    Axios.post("http://localhost:5172/register",{
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
        <form>
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
          <InputContainer 
          title='Cedula de identidad'
          type="number"
          shadow="12345678"
          action={(event)=>{
            setCi(event.target.value);
          }}
          />
          <InputContainer 
          title='Nombre Completo'
          type="text"
          shadow="Josue Romay Torrejon"
          action={(event)=>{
            setUsername(event.target.value);
          }}
          />
          <InputContainer
          title='Email'
          type="email"
          shadow="example@gmail.com"
          action={(event)=>{
            setEmail(event.target.value);
          }}
          />
          <InputContainer
          title='Contraseña'
          type="password"
          shadow={"Introduce tu contraseña"}
          action={(event)=>{
            setPassword(event.target.value);
          }}
          />
          <NavLink to={"/login"}>
            <Button 
            name="Crear Cuenta"
            funcion={agregar_cliente}
            />
          </NavLink>
          <h5 className='text-h5'>Ya Tienes una Cuenta? <NavLink to={"/login"}>Inicia Sesion</NavLink></h5>
        </form>
    </div>
  )
}

export default Register
