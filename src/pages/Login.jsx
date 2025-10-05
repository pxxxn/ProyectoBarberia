import { useState, useEffect } from "react";
import Input from "../components/Input";
import "../styles/Login.css";
import Swal from "sweetalert2";

function Login({ onForgotPassword }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor ingresa usuario y contraseña",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: `Hola ${usuario}, acceso correcto`,
    });
  };

  // Efecto para las partículas
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="login-container">
      {/* Tijeras animadas */}
      <div className="scissors">✂️</div>
      <div className="scissors">✂️</div>
      <div className="scissors">✂️</div>
      <div className="scissors">✂️</div>
      
      {/* Partículas */}
      <div className="particles"></div>

      <div className="login-card">
        {/* Logo */}
        <img 
          src="/images/Logo.jpg" 
          alt="Logo barbería" 
          className="login-logo" 
        />

        <h1 className="login-title">Barbería Admin</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="login-input"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>

        {/* Botón Olvidé contraseña */}
        <button 
          type="button" 
          className="forgot-password-button"
          onClick={onForgotPassword}
        >
          Olvidé mi contraseña
        </button>
      </div>
    </div>
  );
}

export default Login;
