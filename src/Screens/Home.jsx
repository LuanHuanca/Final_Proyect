import React from 'react'
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to={"/reserve"}><Button name="Special"/></NavLink>
        <Button name="General"/>
    </div>
  )
}

export default Home