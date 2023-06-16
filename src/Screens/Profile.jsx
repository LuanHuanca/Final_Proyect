import React from 'react'
import ProfileCard from '../Componentes/ProfileCard'
import './Profile.css'
import users from "../assets/users.json"
import Button from '../Componentes/Button'
import { useNavigate } from 'react-router-dom'


const ProfileScreen = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('username','');
    navigate('/');
  }

  return (
    <div className='Profile-card'>
      <ProfileCard img_perfil={users.imgsrc} username={localStorage.getItem('username')} email={users.email}/>
      <Button 
      name={'Cerrar Sesion'} 
      funcion={handleLogout}
      />
    </div>
  )
}

export default ProfileScreen
