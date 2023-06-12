import React, { useState } from 'react'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import './Login.css'
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
        <form action='' onSubmit={handleSubmit}>
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
        </form>
    </div>
  )
}

export default Login