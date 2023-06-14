import React from 'react'

import { NavLink } from 'react-router-dom'
import Icono from './Icono'

import "./NavBar.css"

const NavBar = ({stilo}) => {
  return (
    <div className='navbar-container' id='navbar'>
        <NavLink to={"/"}><Icono name="Inicio" icon="lucide:home" /></NavLink>
        <NavLink to={"/reviews"}><Icono name="Reseñas" icon="lucide:mails" /></NavLink>
        <NavLink to={"/reserved"}><Icono name="Reservas" icon="humbleicons:documents" /></NavLink>
        <NavLink to={"/profile"}><Icono name="Perfil" icon="octicon:person-16" /></NavLink>
    </div>
  )
}

export default NavBar