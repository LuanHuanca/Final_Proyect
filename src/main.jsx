import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './Screens/NotFound.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login.jsx'
import Register from './Screens/Register.jsx'
import SpecialReserve from './Screens/SpecialReserve.jsx'
import ConfirmeSpecial from './Screens/ConfirmeSpecial.jsx'
import Details from './Screens/Details.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}  />
        <Route  path='/register' element={<Register/>}  />
        <Route  path='*' element={<NotFound />}  />
        <Route  path='/details' element={<Details/>}/>
        <Route  path='/special' element={<SpecialReserve/>}/>
        <Route  path='/confirmeS' element={<ConfirmeSpecial/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
