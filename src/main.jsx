import React  from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import NotFound from './Screens/NotFound.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login.jsx'
import Register from './Screens/Register.jsx'
import Home from './Screens/Home.jsx'
import ImageHeader from './Componentes/ImageHeader.jsx'
import NavBar from './Componentes/NavBar.jsx'
import SpecialReserve from './Screens/SpecialReserve.jsx'
import Reserve from './Screens/Reserve.jsx'
import Reviews from './Screens/Reviews.jsx'
import Profile from './Screens/Profile'
import ProfileDirection from './Screens/ProfileDirection'
import GeneralReserve  from './Screens/GeneralReserve.jsx'
import App from './App'
import Unreserve from './Screens/Unreserve'
import Reserved from './Screens/Reserved'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>  
        <Route  path='/profiledire' element={<ProfileDirection/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        <Route  path='/' element={<Home/>}/>
        <Route  path='/special/reserve' element={<SpecialReserve/>}/>
        <Route  path='/reserve' element={<Reserve/>}/>
        <Route  path='/reviews' element={<Reviews/>}/>
        <Route  path='/general/reserve' element={<GeneralReserve/>}/>
        <Route  path='/app' element={<App/>}/>
        <Route  path='/profile' element={<Profile/>}/>
        <Route  path='/unreserved' element={<Unreserve/>}/>
        <Route  path='/reserved' element={<Reserved/>}/>
      </Routes>
    <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)