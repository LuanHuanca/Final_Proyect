import React from 'react'

import { NavLink } from 'react-router-dom'
import Icono from './Icono'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <NavLink to={"/"}><Icono name="Inicio" icon="lucide:home" /></NavLink>
        <NavLink><Icono name="Reseñas" icon="lucide:mails" /></NavLink>
        <NavLink to={"/reserved"}><Icono name="Reservas" icon="humbleicons:documents" /></NavLink>
        <NavLink to={"/register"}><Icono name="Perfil" icon="octicon:person-16" /></NavLink>
    </div>
  )
}

export default NavBar