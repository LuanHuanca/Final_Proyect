import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './Screens/NotFound.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login.jsx'
import Register from './Screens/Register.jsx'
import NavBar from './Componentes/NavBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>

        <Route  path='/' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />

      </Routes>
      <NavBar/>
    </BrowserRouter>

  </React.StrictMode>,
)
