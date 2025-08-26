import React from "react";
import {ContactForm} from "./components/ContactForm";
import "./Contacto.css"; // el css general
import { Nav } from "../../components/Nav";
import carroImage from '../../assets/img/carros01.png';  
import { TargetasPago } from "./components/TargetasPago";
import Footer from "../../components/Footer";


export const Contacto = () => {
  return (
    <>
      {/* NAVBAR */}
      <Nav />
      {/* CONTACTO */}
      <div className="container">
        <ContactForm />

        <div className="form-section">
          <h2>¿Cómo podemos ayudarte?</h2>
          <img src={carroImage} alt="Contacto" />
        </div>
      </div>

      {/* FOOTER */}
      <TargetasPago />

      <Footer />
    </>
  )
}
