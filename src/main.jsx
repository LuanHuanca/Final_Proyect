import React from 'react'
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
import Details from './Screens/SpecialDetails.jsx'
import ConfirmeSpecial from './Screens/SpecialConfirm.jsx'
import Reserve from './Screens/Reserve.jsx'
import Reviews from './Screens/Reviews.jsx'
import ProfileScreen from './Screens/Profile'
import GeneralReserve  from './Screens/GeneralReserve.jsx'
import GeneralDetails  from './Screens/GeneralDetails.jsx'
import GeneralConfirm from './Screens/GeneralConfirm.jsx'
import Menu from './Screens/Menu.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>
        <Route  path='/login' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        <Route  path='/' element={<Home/>}/>
        <Route  path='/special/reserve' element={<SpecialReserve/>}/>
        <Route  path='/special/details' element={<Details/>}/>
        <Route  path='/special/confirm' element={<ConfirmeSpecial/>}/>
        <Route  path='/reserved' element={<Reserve/>}/>
        <Route  path='/reviews' element={<Reviews/>}/>
        <Route  path='/profile' element={<ProfileScreen/>}/>
        <Route  path='/general/reserve' element={<GeneralReserve/>}/>
        <Route  path='/general/details' element={<GeneralDetails/>}/>
        <Route  path='/general/confirm' element={<GeneralConfirm/>}/>
        <Route path='/menu' element={<Menu/>}/>
        
       
      </Routes>
    <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)