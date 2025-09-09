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
    <footer className="bg-gray-800 text-white pt-16 px-8 pb-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
            <div className="max-w-sm">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">soymahorodriguez</h3>
              <p className="text-lg font-semibold text-pink-300 mb-4">
                Transformando vidas, empoderando mujeres
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cada día es una nueva oportunidad para ser la mejor versión de ti misma. 
                Juntas podemos hacer que suceda.
              </p>
            </div>
            
            <div className="contents">
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-6 text-white">Navegación</h4>
                <ul className="flex flex-col gap-3">
                  <li><button className="bg-transparent border-none text-gray-400 text-sm text-left cursor-pointer transition-colors duration-200 p-0 hover:text-pink-300" onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>Inicio</button></li>
                  <li><button className="bg-transparent border-none text-gray-400 text-sm text-left cursor-pointer transition-colors duration-200 p-0 hover:text-pink-300" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Sobre Mí</button></li>
                 
                  
                 
                  <li><button className="bg-transparent border-none text-gray-400 text-sm text-left cursor-pointer transition-colors duration-200 p-0 hover:text-pink-300" onClick={() => document.getElementById("ebooks")?.scrollIntoView({ behavior: "smooth" })}>Ebooks</button></li>
                  
                  <li><button className="bg-transparent border-none text-gray-400 text-sm text-left cursor-pointer transition-colors duration-200 p-0 hover:text-pink-300" onClick={() => document.getElementById("printed-books")?.scrollIntoView({ behavior: "smooth" })}>Libros</button></li>
              
                  <li><button className="bg-transparent border-none text-gray-400 text-sm text-left cursor-pointer transition-colors duration-200 p-0 hover:text-pink-300" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contacto</button></li>
                </ul>
                
              </div>
              
              {/* <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-6 text-white">Servicios</h4>
                <ul className="flex flex-col gap-3">
                  <li><span className="text-gray-400 text-sm cursor-default">Coaching Individual</span></li>
                  <li><span className="text-gray-400 text-sm cursor-default">Programa Empoderamiento</span></li>
                  <li><span className="text-gray-400 text-sm cursor-default">Mentoría Empresarial</span></li>
                  <li><span className="text-gray-400 text-sm cursor-default">Llamada Gratuita</span></li>
                </ul>
              </div> */}
              
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-6 text-white">Sígueme</h4>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 no-underline text-sm transition-colors duration-200 hover:text-pink-300"
                      title={social.name}
                    >
                      <span className="text-lg">{getSocialIcon(social.icon)}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)] rounded-3xl p-12 text-center border border-pink-500/10">
            <div className="max-w-lg mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">¿Lista para comenzar tu transformación?</h3>
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                No esperes más. Tu mejor versión te está esperando.
              </p>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white border-none px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                size="lg"
              >
                <Heart size={16} />
                Agenda tu llamada gratuita
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400 m-0">© 2024 Maho Rodríguez. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2 text-sm text-gray-400 m-0">
              Hecho con <Heart size={14} className="text-pink-500 animate-pulse" /> para mujeres empoderadas
            </p>
          </div>
          
          <Button 
            onClick={scrollToTop}
            className="w-12 h-12 border-2 border-pink-500/30 bg-white/10 text-pink-300 rounded-full transition-all duration-300 backdrop-blur-md hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:-translate-y-0.5"
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