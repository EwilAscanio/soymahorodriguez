import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { socialLinks } from "../mock";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName) => {
    // Using simple social media icons
    const icons = {
      Instagram: "📷",
      Facebook: "📘", 
      Youtube: "🎥",
      Linkedin: "💼"
    };
    return icons[iconName] || "🔗";
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">Maho Rodríguez</h3>
              <p className="footer-tagline">
                Transformando vidas, empoderando mujeres
              </p>
              <p className="footer-description">
                Cada día es una nueva oportunidad para ser la mejor versión de ti misma. 
                Juntas podemos hacer que suceda.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-title">Navegación</h4>
                <ul className="footer-nav">
                  <li><button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>Inicio</button></li>
                  <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre Mí</button></li>
                  <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Servicios</button></li>
                  <li><button onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}>Testimonios</button></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Servicios</h4>
                <ul className="footer-nav">
                  <li><span>Coaching Individual</span></li>
                  <li><span>Programa Empoderamiento</span></li>
                  <li><span>Mentoría Empresarial</span></li>
                  <li><span>Llamada Gratuita</span></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4 className="footer-title">Sígueme</h4>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <span className="social-icon">{getSocialIcon(social.icon)}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-cta">
            <div className="cta-content">
              <h3 className="cta-title">¿Lista para comenzar tu transformación?</h3>
              <p className="cta-description">
                No esperes más. Tu mejor versión te está esperando.
              </p>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="footer-cta-button"
                size="lg"
              >
                <Heart size={16} />
                Agenda tu llamada gratuita
              </Button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2024 Maho Rodríguez. Todos los derechos reservados.</p>
            <p className="footer-love">
              Hecho con <Heart size={14} className="heart-icon" /> para mujeres empoderadas
            </p>
          </div>
          
          <Button 
            onClick={scrollToTop}
            className="scroll-to-top"
            size="icon"
            variant="outline"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;