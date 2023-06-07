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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>
        <Route  path='/login' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />

      </Routes>
    <NavBar/>
    </BrowserRouter>
  </React.StrictMode>,
)
