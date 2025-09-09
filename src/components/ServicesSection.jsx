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
    <section id="services" className="bg-white py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Servicios</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Programas de Transformación</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus necesidades y objetivos personales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`mt-16 flex justify-center animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Card className="w-full max-w-2xl bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 rounded-2xl">
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl font-bold text-gray-800">¿No estás segura cuál es para ti?</h3>
              <p className="mt-4 text-gray-600">
                Agenda una llamada gratuita de 20 minutos para conocerte mejor y recomendarte el programa ideal.
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 bg-pink-500 text-white hover:bg-pink-600 px-8 py-3 rounded-full"
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
