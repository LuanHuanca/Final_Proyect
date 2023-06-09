import React from 'react'
import "./ProfileCard.css"
import Button from '../Componentes/Button'


const ProfileCard = ({img_perfil,username,email}) => {
  return (
    <div className='card'>
      
        <img src={img_perfil}/>
        <h3>Nombre</h3>
        <div className='information'>{username}</div>
        <h3>Correo Electronico</h3>
        <div className='information'>{email}</div>
        <Button name={'Cerrar Sesion'}/>
    </div>
  )
}

export default ProfileCard
