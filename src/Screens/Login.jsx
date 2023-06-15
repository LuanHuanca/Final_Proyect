import React from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import './Login.css'
import { useState } from 'react'
import Validation from '../LoginValidation.js'

const Login = ( {setCi}) => {


  const [values,setValues] = useState({
    ci:'',
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
    if(errors.ci === ""  && errors.password === ""){
      Axios.post('http://localhost:5172/login',values)
      .then(res => {
        if(res.data == "Success"){
          navigate('/Profile');
          localStorage.setItem('carnet',[values.ci]);
          setCi(localStorage.getItem('carnet'));
          console.log(localStorage.getItem('carnet'));
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
          <Title title={"INICIO DE SESION"} context={"Inicia sesión con tu cedula de identidad"}/>
          <InputContainer 
          title={"Cedula de identidad"} 
          type={"text"}
          shadow={"12345678"}
          name='ci'
          action={handleInput}
          />
          <span className='text-danger'>{errors.ci}</span>
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