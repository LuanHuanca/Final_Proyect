import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './Screens/NotFound.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login.jsx'
import Register from './Screens/Register.jsx'

import Listar from "./componentes/Listar.jsx";
import Crear from './componentes/Crear.jsx';
import Editar from "./componentes/Editar.jsx";
import ImageHeader from "./componentes/ImageHeader.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageHeader/>
    <BrowserRouter>
      <Routes>
      

        <Route  path='/' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        
        <Route  path="/sistema" element={<Listar/>} />
        <Route  path="/crear" element={<Crear/>} />
        <Route  path="/editar/:id" element={<Editar/>} />
      </Routes>
  
    </BrowserRouter>
    
  </React.StrictMode>,
)
