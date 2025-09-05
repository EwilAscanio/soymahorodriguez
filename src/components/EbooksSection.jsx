import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Book } from "lucide-react";
import { ebooksData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedEbookCard from "./AnimatedEbookCard";

const EbooksSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="ebooks" className="ebooks-section">
      <div className="ebooks-container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="section-badge">Libros & Ebooks</span>
          <h2 className="section-title">Recursos Inspiracionales</h2>
          <p className="section-description">
            Descarga contenido inspirador que transformará tu perspectiva y fortalecerá tu familia
          </p>
        </div>
        
        <div className="ebooks-grid">
          {ebooksData.map((book, index) => (
            <AnimatedEbookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`ebooks-cta animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Card className="cta-card">
            <CardContent className="cta-content">
              <div className="cta-icon">
                <Book className="icon" />
              </div>
              <h3 className="cta-title">¿Buscas transformación profunda?</h3>
              <p className="cta-description">
                Estos recursos han cambiado la vida de miles de mujeres y familias. 
                Comienza tu journey de crecimiento personal hoy mismo.
              </p>
              <div className="cta-stats">
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Descargas</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4.8★</span>
                  <span className="stat-label">Calificación</span>
                </div>
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Recomiendan</span>
                </div>
              </div>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="cta-button"
                size="lg"
              >
                Quiero una recomendación personalizada
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EbooksSection;