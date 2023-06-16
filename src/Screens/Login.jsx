import React, { useState } from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import './Login.css'
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
        </form>
    </div>
  )
}

export default Login