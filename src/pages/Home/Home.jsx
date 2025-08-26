import React from 'react'
import './Home.css'
import {Nav} from '../../components/Nav'
import { Carrusel } from './components/Carrusel'
import { QuienesSomos } from './components/QuienesSomos'
import { PorqueElegirnos } from './components/PorqueElegirnos'
import { Explorar } from './components/Explorar'
import { Ubicacion } from './components/Ubicacion'
import Footer from '../../components/Footer'

export const Home = () => {
  return (
    <>
        <Nav />
        <Carrusel />
        <QuienesSomos />
        <PorqueElegirnos />
        <Explorar />
        <Ubicacion />
        <Footer />
    </> 
  )
}
