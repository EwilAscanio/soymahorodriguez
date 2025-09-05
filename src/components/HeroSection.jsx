import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroData } from "../mock";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-on-load delay-1">
              <Sparkles className="sparkles-icon" />
              <span>Coaching & Desarrollo Personal</span>
            </div>
            
            <h1 className="hero-title animate-on-load delay-2">
              {heroData.title}
            </h1>
            
            <p className="hero-subtitle animate-on-load delay-3">
              {heroData.subtitle}
            </p>
            
            <div className="hero-actions animate-on-load delay-4">
              <Button 
                onClick={scrollToContact}
                className="primary-cta-button"
                size="lg"
              >
                {heroData.ctaText}
                <ArrowRight className="button-icon" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="secondary-cta-button"
                size="lg"
              >
                Conoce más sobre mí
              </Button>
            </div>
          </div>
          
          <div className="hero-image animate-on-load delay-1">
            <div className="image-container">
              <img 
                src={heroData.profileImage} 
                alt="Maho Rodríguez - Coach de Desarrollo Personal"
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats animate-on-load delay-4">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Mujeres transformadas</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Satisfacción cliente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;