import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto } from './pages/Contacto/Contacto'
import Login from './pages/Login/Login'
import Vehiculos from './pages/Vehiculos/Vehiculos'
import { Nav } from './components/Nav'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehiculos" element={<Vehiculos />} />
      <Route path="/reservas" element={<><Nav /><h1>PAGINA DE RESERVAS</h1></>} />
    </Routes>
  )
}

export default App
