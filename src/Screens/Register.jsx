import React, {useState} from 'react'
import './Register.css'
import InputContainer from '../Componentes/InputContainer.jsx'
import Title from '../Componentes/Title.jsx'
import Button from '../Componentes/Button.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation';
import axios from 'axios'


const Register = () => {
  const [values, setValues] = useState ({
    name : '',
    email: '',
    password: ''
})
const navigate = useNavigate();
const [errors, setErrors] = useState({})
const handleInput = (event) => {
  setValues(prev => ({...prev, [event.target.name] : [event.target.value] }))
}

const handleSubmit = (event) =>{
  event.preventDefault();
  setErrors(Validation(values));
  if(errors.name === "" && errors.email === "" && errors.password === ""){
     axios.post('http://localhost:5173/register', values)
     .then(res => {
           navigate('/login');

     })
     .catch(err => console.log(err));
     
  }

}
  return (
    <div >
        <Title title={"REGISTRO"} context={"Llene los siguientes datos"}/>
        <form action="" onSubmit={handleSubmit}>
        <div>
        <InputContainer title='Nombre Completo' type={"text"} shadow={"Josue Romay Torrejon"} name='name'
        nChange={handleInput}/>
        {errors.name && <span className='text-danger'>  {errors.name}</span>}
        </div>
        <div>
        <InputContainer title='Email' type={"email"} shadow={"example@gmail.com"} name='email'
        nChange={handleInput}/>
        {errors.email && <span className='text-danger'>  {errors.email}</span>}
        </div>
        <div>
        <InputContainer title='Contraseña' type={"password"} shadow={"Introduce tu contraseña"} name='password'
        nChange={handleInput}/>
        {errors.password && <span className='text-danger'>  {errors.password}</span>}
        </div>
        
        <Button type='submit' name={"Crear Cuenta"}/>
        <NavLink to="/login"></NavLink>
        
        <h5 className='text-h5'>Ya Tienes una Cuenta? <NavLink to={"/login"}>Inicia Sesion</NavLink></h5>
        </form>
    </div>
  )
}

export default Register
