import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: "Inicio", id: "hero" },
    { name: "Sobre Mí", id: "about" },
    { name: "Servicios", id: "services" },
    { name: "Testimonios", id: "testimonials" },
    { name: "Ebooks", id: "ebooks" },
    { name: "Libros", id: "printed-books" },
    { name: "Blog", id: "blog" },
    { name: "Contacto", id: "contact" }
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-text">soymahorodríguez</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="cta-button"
          >
            Agenda tu sesión
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="mobile-nav-link"
          >
            {item.name}
          </button>
        ))}
        <Button 
          onClick={() => scrollToSection("contact")}
          className="mobile-cta-button"
        >
          Agenda tu sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;