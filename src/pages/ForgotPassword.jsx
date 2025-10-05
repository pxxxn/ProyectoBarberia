import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/ForgotPassword.css";

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");

  const handleRecover = (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor ingresa tu correo",
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#dc7850'
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Recuperación enviada",
      text: `Se ha enviado un enlace de recuperación a ${email}`,
      background: '#1a1a1a',
      color: '#fff',
      confirmButtonColor: '#dc7850'
    });
  };

  // Efecto para las ondas animadas
  useEffect(() => {
    const wavesContainer = document.querySelector('.recovery-waves');
    if (wavesContainer) {
      const createWave = () => {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.left = `${Math.random() * 100}%`;
        wave.style.top = `${Math.random() * 100}%`;
        wave.style.animationDelay = `${Math.random() * 4}s`;
        wavesContainer.appendChild(wave);
        
        setTimeout(() => {
          wave.remove();
        }, 4000);
      };

      // Crear ondas iniciales
      for (let i = 0; i < 8; i++) {
        setTimeout(createWave, i * 500);
      }

      // Continuar creando ondas
      const interval = setInterval(createWave, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="forgot-container">
      {/* Iconos de recuperación flotantes */}
      <div className="recovery-icon">🔑</div>
      <div className="recovery-icon">📧</div>
      <div className="recovery-icon">🔄</div>
      <div className="recovery-icon">⚡</div>
      
      {/* Ondas animadas */}
      <div className="recovery-waves"></div>

      <div className="forgot-card">
        <h1 className="forgot-title">Recuperar Contraseña</h1>
        
        <p className="recovery-instruction">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        <form onSubmit={handleRecover}>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-input"
          />
          <button type="submit" className="recovery-button">
             Enviar Enlace de Recuperación
          </button>
        </form>
        
        <button 
          type="button" 
          className="back-button"
          onClick={onBack}
        >
           Volver al Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;