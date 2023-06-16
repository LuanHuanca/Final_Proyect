import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import Validation from '../services/SignUpValidation'


const Register = () => {
  const [values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    telefono:''
  })
  const navigate = useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput = (event)=>{
    setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.username === "" && errors.email === "" && errors.password === "" && errors.telefono === ""){
      Axios.post('http://localhost:5172/register',values)
      .then(res => {
        navigate('/Profile');
      })
      .catch(err => console.log(err));
        
    }
  }

  return (
    <div >
        <form action='' onSubmit={handleSubmit}>
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
          <InputContainer 
          title='Nombre de usuario'
          type="text"
          shadow="JosuGey"
          name='username'
          action={handleInput}
          />
          <span className='text-danger'>{errors.username}</span>
          <InputContainer 
          title='Email'
          type="email"
          shadow="example@gmail.com"
          name='email'
          action={handleInput}
          />
          <span className='text-danger'>{errors.email}</span>
          <InputContainer
          title='Contraseña'
          type="password"
          shadow="Introduce tu contraseña"
          name='password'
          action={handleInput}
          />
          <span className='text-danger'>{errors.password}</span>
          <InputContainer
          title='Telefono'
          type="number"
          shadow={"76253774"}
          name='telefono'
          action={handleInput}
          />
          <span className='text-danger'>{errors.telefono}</span>
          <Button 
            name="Crear Cuenta"
            tipo='submit'
          />
          <h5 className='text-h5'>Ya Tienes una Cuenta? <NavLink to={"/login"}>Inicia Sesion</NavLink></h5>
        </form>
    </div>
  )
}

export default Register
