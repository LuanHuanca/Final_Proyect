import React, { useState } from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import './Login.css'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import Validation from'./LoginValidation.jsx';

const Login = () => {
  const [values, setValues] = useState ({
      email: '',
      password: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value] }))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));

  }
  return (
    <div className='box'>
        <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu correo electrónico"}/>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <InputContainer title={"Email"} type={"email"} shadow={"example@gmail.com"} name='email' 
            onChange={handleInput}/>
            {errors.email && <span className='text-danger'>  {errors.email}</span>}
          </div>
          <div>
            <InputContainer title={"Contraseña"} type={"password"} shadow={"Introduce tu contraseña"} name='password'
            onChange={handleInput}/>
            {errors.password && <span className='text-danger'>  {errors.password}</span>}
          </div>
            <Button  type='submit' name={"Inicia Sesión"}/>
            <NavLink to={"/Profile"}></NavLink>
            <h5 className='text-h5'>No Tienes Cuenta? <NavLink to={"/register"}>Registrate</NavLink></h5>
=======
import { useState } from 'react'
import Validation from '../services/LoginValidation.js'

const Login = () => {


  const [values,setValues] = useState({
    username:'',
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
    if(errors.username === ""  && errors.password === ""){
      Axios.post('http://localhost:5172/login',values)
      .then(res => {
        if(res.data == "Success"){
          localStorage.setItem('username',[values.username]);
          navigate('/Profile');
        }else{
          alert("No record Existed");
        }
      })
      .catch(err => console.log(err));
    }
  }
  return (
    <div className='box'>
        <form action='' onSubmit={handleSubmit}>
          <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu nombre de usuario"}/>
          <InputContainer 
          title={"Nombre de usuario"} 
          type={"text"}
          shadow={"JosuGey"}
          name='username'
          action={handleInput}
          />
          <span className='text-danger'>{errors.username}</span>
          <InputContainer 
          title={"Contraseña"} 
          type={"password"} 
          shadow={"Introduce tu contraseña"}
          name='password'
          action={handleInput}
          />
          <span className='text-danger'>{errors.password}</span>
          <Button 
            name={"Inicia Sesión"}
            tipo='submit'
            />
          <h5 className='text-h5'>No Tienes Cuenta? <NavLink to={"/register"}>Registrate</NavLink></h5>
>>>>>>> 9700b46dc12b096e4ed9a778bd5a8e95a192b4b3
        </form>
    </div>
  )
}

export default Login