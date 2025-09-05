import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { testimonialsData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [carouselRef, isCarouselVisible] = useIntersectionObserver({ threshold: 0.2 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">Lo que dicen mis clientas</h2>
          <p className="section-description">
            Historias reales de transformación y crecimiento personal
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className={`testimonials-carousel animate-on-scroll fade-in ${isCarouselVisible ? 'is-visible' : ''}`}>
          <div className="carousel-container">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="carousel-button prev-button"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="testimonials-wrapper">
              {testimonialsData.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                    opacity: index === currentIndex ? 1 : 0.7
                  }}
                >
                  <CardContent className="testimonial-content">
                    <div className="quote-icon">
                      <Quote size={32} />
                    </div>
                    
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="star filled" />
                      ))}
                    </div>
                    
                    <p className="testimonial-text">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="author-image"
                      />
                      <div className="author-info">
                        <span className="author-name">{testimonial.name}</span>
                        <span className="author-profession">{testimonial.profession}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="carousel-button next-button"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
          
          <div className="carousel-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;