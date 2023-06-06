import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import NotFound from './Screens/NotFound.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login.jsx'
import Register from './Screens/Register.jsx'
import Home from './Screens/Home.jsx'
import ImageHeader from './Componentes/Profile Screen/ImageHeader.jsx'
import NavBar from './Componentes/NavBar.jsx'
import SpecialReserve from './Screens/SpecialReserve.jsx'
import Details from './Screens/Details.jsx'
import ConfirmeSpecial from './Screens/ConfirmeSpecial.jsx'
import Reserve from './Screens/Reserve.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>
        <Route  path='/login' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        <Route  path='/' element={<Home/>}/>
        <Route  path='/reserve' element={<SpecialReserve/>}/>
        <Route  path='/details' element={<Details/>}/>
        <Route  path='/confirme' element={<ConfirmeSpecial/>}/>
        <Route  path='/reserved' element={<Reserve/>}/>
      </Routes>
    <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)
