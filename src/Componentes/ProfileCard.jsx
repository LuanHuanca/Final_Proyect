import React from 'react'
import "./ProfileCard.css"


const ProfileCard = ({img_perfil,username,email}) => {
  return (
    <div className='card'>
      
        <img src={img_perfil}/>
        <h3>Nombre</h3>
        <div className='information'>{username}</div>
        <h3>Correo Electronico</h3>
        <div className='information'>{email}</div>
    </div>
  )
}

export default ProfileCard
