import React  from 'react'
import Login from './Login';
import ProfileScreen from './Profile';


const ProfileDirection = () => {
    return (
      <div className='App'>
        {
          !localStorage.getItem('username').length > 0
            ?<Login/>
            :<ProfileScreen/>
        }
      </div>
    )
}

export default ProfileDirection
