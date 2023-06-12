import React from 'react'
import ProfileCard from '../Componentes/ProfileCard'
import './Profile.css'
import users from "../assets/users.json"
import Button from '../Componentes/Button'
import { NavLink } from 'react-router-dom'


const ProfileScreen = () => {
  return (
    <div className='Profile-card'>
      <ProfileCard img_perfil={users.imgsrc} username={users.user} email={users.email}/>
      <NavLink to={"/login"}><Button name={'Cerrar Sesion'}/></NavLink>
    </div>
  )
}

export default ProfileScreen
