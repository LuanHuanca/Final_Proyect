import React from 'react'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to={"/special/reserve"}><Button name="Especial"/></NavLink>
        <NavLink to={"/general/reserve"}><Button name="General"/></NavLink>
        tienes cuenta? <NavLink to={"/register"}>registrate</NavLink>
    </div>
  )
}

export default Home