import React from "react";
import { Heart, Target, Award } from "lucide-react";
import { aboutData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedCard from "./AnimatedCard";

const AboutSection = () => {
  const [imageRef, isImageVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [textRef, isTextVisible] = useIntersectionObserver({ threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Cada mujer es única y merece ser comprendida."
    },
    {
      icon: Target,
      title: "Propósito",
      description: "Te ayudo a descubrir tu propósito de vida."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometida con la calidad y resultados reales."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header text-center mb-12">
          <span className="section-badge">Sobre Mí</span>
          <h2 className="section-title">{aboutData.title}</h2>
        </div>
        <div className="about-content">
          <div 
            ref={imageRef}
            className={`about-image animate-on-scroll slide-in-from-left ${isImageVisible ? 'is-visible' : ''}`}>
            <div className="image-wrapper">
              <img 
                src={aboutData.image} 
                alt="Maho Rodríguez - Sobre mí"
                className="about-profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div 
            ref={textRef}
            className={`about-text animate-on-scroll slide-in-from-right ${isTextVisible ? 'is-visible' : ''}`}>
            <p className="about-description">
              {aboutData.description}
            </p>
            
            <p className="about-mission ">
              {aboutData.mission}
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {values.map((value, index) => (
                <AnimatedCard key={index} value={value} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;