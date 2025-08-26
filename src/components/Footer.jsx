import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoCarExpress from './imagenes/logo-car-express.png';
import facebookIcon from './imagenes/facebook.jpg';
import instagramIcon from './imagenes/instagram.jpg';
import whatsappIcon from './imagenes/whatsapp.jpg';

const Footer = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (element) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <footer>
      <aside>
        <img src={logoCarExpress} alt="Logo Car Express" />
      </aside>

      <section>
        <article className="footer-article">
          <h2>Enlaces de Interés</h2>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/vehiculos'>Vehículos</Link></li>
            <li><Link to='/reservas'>Reservas</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/login'>Iniciar sesión</Link></li>
          </ul>
        </article>

        <article className="footer-article">
          <h2>Contacto</h2>
          <p 
            id="telefonos"
            className={hoveredElement === 'telefonos' ? 'resaltar' : ''}
            onMouseEnter={() => handleMouseEnter('telefonos')}
            onMouseLeave={handleMouseLeave}
          >
            <strong>950300733 - 961063002</strong>
          </p>
          
          <div className="divider"></div>
          
          <div className="sede-section">
            <h3>SEDE:</h3>
            <p 
              id="frase"
              className={hoveredElement === 'frase' ? 'resaltar' : ''}
              onMouseEnter={() => handleMouseEnter('frase')}
              onMouseLeave={handleMouseLeave}
            >
              Somos una empresa de alquiler y venta de vehículos, con los precios más competitivos y el mejor servicio al cliente.
            </p>
            
            <p className="sede-city"><strong>LIMA</strong></p>
            <p 
              id="direccion"
              className={hoveredElement === 'direccion' ? 'resaltar' : ''}
              onMouseEnter={() => handleMouseEnter('direccion')}
              onMouseLeave={handleMouseLeave}
            >
              Jr. Abtao 1261 - La Victoria.
            </p>
          </div>

          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={whatsappIcon} alt="Whatsapp" />
          </div>
        </article>
      </section>

      {/* Botón de WhatsApp dentro del footer pero posicionado absolutamente */}
      <a href="https://wa.me/51957452336" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </footer>
  );
};

export default Footer;