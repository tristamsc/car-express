import { Link } from "react-router-dom";
import "./Login.css"; 
import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
    <Nav />
    <div className="login-page">
      {/*  FORMULARIO LOGIN */}
      <div className="login-card">
        <img src="/img/logo-car-express.png" alt="" />
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="ejemplo@correo.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********" required />
          </div>

          <button type="submit" className="login-btn">Ingresar</button>
        </form>

        <div className="login-links">
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <span> | </span>
          <Link to="/register">Crear cuenta</Link>
        </div>
      </div>

    
    </div>
    <Footer />
    </>
  );
}

