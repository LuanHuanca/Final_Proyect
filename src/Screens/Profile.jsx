import React from 'react'
import ProfileCard from '../Componentes/ProfileCard'
import './Profile.css'
import users from "../assets/users.json"


const ProfileScreen = () => {
  return (
    <div className='Profile-card'>
      <ProfileCard img_perfil={users.imgsrc} username={users.user} email={users.email}/>
     
    </div>
  )
}

export default ProfileScreen
