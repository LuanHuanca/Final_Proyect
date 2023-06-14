import React from 'react'
import './Register.css'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import Validation from '../SignUpValidation'


const Register = () => {
  const [values,setValues] = useState({
    ci:'',
    username:'',
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput = (event)=>{
    setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.ci === "" && errors.username === "" && errors.email === "" && errors.password === ""){
      Axios.post('http://localhost:5172/register',values)
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
        
    }
  }

  // const [ci,setCi] = useState(0);
  // const [username,setUsername] = useState("");
  // const [password,setPassword] = useState("");
  // const [email,setEmail] = useState("");

  // const [dato, setDato] = useState('');
  

  // const agregar_cliente = ()=>{
  //   Axios.post("http://localhost:5170/register",{
  //     ci:ci,
  //     username:username,
  //     password:password,
  //     email:email
  //   }).then(()=>{
  //     alert("Cliente registrado");
  //   });
  // }

  return (
    <div >
        <form action='' onSubmit={handleSubmit}>
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
          <InputContainer 
          title='Cedula de identidad'
          type="number"
          shadow="12345678"
          name='ci'
          action={handleInput}
          />
          <span className='text-danger'>{errors.ci}</span>
          <InputContainer 
          title='Nombre Completo'
          type="text"
          shadow="Josue Romay Torrejon"
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
          shadow={"Introduce tu contraseña"}
          name='password'
          action={handleInput}
          />
          <span className='text-danger'>{errors.password}</span>
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
