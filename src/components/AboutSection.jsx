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
    <section id="about" className="bg-white py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Sobre Mí</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">{aboutData.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left">
          <div 
            ref={imageRef}
            className={`relative animate-on-scroll slide-in-from-left ${isImageVisible ? 'is-visible' : ''}`}>
            <div className="group relative w-full max-w-xs mx-auto md:mx-0 md:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={aboutData.image} 
                alt="Maho Rodríguez - Sobre mí"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>
          </div>
          
          <div 
            ref={textRef}
            className={`animate-on-scroll slide-in-from-right ${isImageVisible ? 'is-visible' : ''}`}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              {aboutData.description}
            </p>
            
            <p className="text-base text-gray-500 mb-8 leading-relaxed italic pl-4 border-l-4 border-pink-300 text-justify">
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