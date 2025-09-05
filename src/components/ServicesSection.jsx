import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { servicesData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedServiceCard from "./AnimatedServiceCard";

const ServicesSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div 
          ref={headerRef} 
          className={`section-header animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">Programas de Transformación</h2>
          <p className="section-description">
            Elige el programa que mejor se adapte a tus necesidades y objetivos personales
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <AnimatedServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`services-cta animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Card className="cta-card">
            <CardContent className="cta-content">
              <h3 className="cta-title">¿No estás segura cuál es para ti?</h3>
              <p className="cta-description">
                Agenda una llamada gratuita de 20 minutos para conocerte mejor y recomendarte el programa ideal.
              </p>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="cta-button"
                size="lg"
              >
                Agenda llamada gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;