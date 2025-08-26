import React from 'react'
import visa from '../../../assets/img/Visa_Logo.png';
import mastercard from '../../../assets/img/MasterCard.png';
import amex from '../../../assets/img/American_Express.png';
import diners from '../../../assets/img/Diners_Club_Logo.png';
import fb from '../../../assets/img/FB.png';
import ig from '../../../assets/img/IG_01.png';
import twitter from '../../../assets/img/twitter.png';
import tiktok from '../../../assets/img/tiktok.png';

export const TargetasPago = () => {
  return (
    <>
      {/* Footer de tarjetas */}
      <div className="payment-footer">
        <p>Aceptamos todas las tarjetas</p>
        <div className="cards">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="MasterCard" />
          <img src={amex} alt="American Express" />
          <img src={diners} alt="Diners Club" />
        </div>
      </div>

      {/* Footer de redes sociales 
      <footer className="social-footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">Soporte</a>
            <a href="#">Políticas de cookies</a>
            <a href="#">Términos y condiciones</a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/?locale=es_LA#"><img src={fb} alt="Facebook" /></a>
            <a href="https://www.instagram.com/"><img src={ig} alt="Instagram" /></a>
            <a href="https://x.com/?lang=es"><img src={twitter} alt="Twitter" /></a>
            <a href="https://www.tiktok.com/es/"><img src={tiktok} alt="TikTok" /></a>
          </div>
        </div>
      </footer>*/}
    </>
  )
}
