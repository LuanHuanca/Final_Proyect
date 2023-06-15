import React, { useState } from 'react'
import Login from './Screens/Login';
import Profile from './Screens/Profile'
import Home from './Screens/Home';
function App() {



const [ci,setCi] = useState([]);



  return (
    <div className='App'>
      {
        !localStorage.getItem('carnet').length > 0
          ?<Login setCi={setCi}/>
          :<Profile ci={ci} setCi={setCi}/>
      }
    </div>
  )
}

export default App;
