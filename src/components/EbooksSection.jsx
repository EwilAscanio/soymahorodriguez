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
    <section id="ebooks" className="relative bg-white py-24 px-8">
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[var(--gradient-soft)] to-transparent z-0" />
      <div className="relative max-w-screen-xl mx-auto z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Libros & Ebooks</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Mis Ebooks en Amazon.com</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Adquiere contenido inspirador que transformará tu perspectiva y fortalecerá tu familia
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-10 mb-16">
          {ebooksData.map((book, index) => (
            <AnimatedEbookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`flex justify-center animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Card className="relative w-full max-w-4xl bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)] border border-pink-300 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)]" />
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-br from-gray-800 to-pink-600 bg-clip-text text-transparent">¿Buscas transformación profunda?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg mx-auto">
                Estos recursos han cambiado la vida de miles de mujeres y familias. 
                Comienza tu journey de crecimiento personal hoy mismo.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8 py-8 border-t border-b border-pink-500/20">
                <div className="text-center">
                  <span className="block text-3xl font-extrabold bg-gradient-to-br from-pink-300 to-pink-600 bg-clip-text text-transparent mb-2">10K+</span>
                  <span className="block text-sm text-gray-500 font-medium">Descargas</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-extrabold bg-gradient-to-br from-pink-300 to-pink-600 bg-clip-text text-transparent mb-2">4.8★</span>
                  <span className="block text-sm text-gray-500 font-medium">Calificación</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-extrabold bg-gradient-to-br from-pink-300 to-pink-600 bg-clip-text text-transparent mb-2">95%</span>
                  <span className="block text-sm text-gray-500 font-medium">Recomiendan</span>
                </div>
              </div>
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white border-none px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
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