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
import SpecialDetails from './Screens/SpecialDetails.jsx'
import SpecialConfirm from './Screens/SpecialConfirm.jsx'
import Reserve from './Screens/Reserve.jsx'
import Reviews from './Screens/Reviews.jsx'
import Profile from './Screens/Profile'
import GeneralReserve  from './Screens/GeneralReserve.jsx'
import GeneralDetails  from './Screens/GeneralDetails.jsx'
import GeneralConfirm from './Screens/GeneralConfirm.jsx'
import ProfileDirection from './Screens/ProfileDirection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>  
        <Route  path='/Profile' element={<ProfileDirection/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        <Route  path='/' element={<Home/>}/>
        <Route  path='/special/reserve' element={<SpecialReserve/>}/>
        <Route  path='/special/details' element={<SpecialDetails/>}/>
        <Route  path='/special/confirm' element={<SpecialConfirm/>}/>
        <Route  path='/reserved' element={<Reserve/>}/>
        <Route  path='/reviews' element={<Reviews/>}/>
        <Route  path='/general/reserve' element={<GeneralReserve/>}/>
        <Route  path='/general/details' element={<GeneralDetails/>}/>
        <Route  path='/general/confirm' element={<GeneralConfirm/>}/>
      </Routes>
    <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)