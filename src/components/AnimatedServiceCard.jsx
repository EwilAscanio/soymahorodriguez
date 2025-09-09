import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { User, Users, Briefcase, Check, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedServiceCard = ({ service, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1, delay: index * 150 });

  const iconMap = {
    User: User,
    Users: Users,
    Briefcase: Briefcase
  };
  const IconComponent = iconMap[service.icon];

  const handleBookService = (serviceName) => {
    console.log(`Booking service: ${serviceName}`);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="bg-white border border-pink-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500"></div>
        <CardHeader className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-50 to-rose-100 text-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 border border-pink-200">
            <IconComponent size={32} />
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 mb-2">{service.title}</CardTitle>
          <p className="text-sm text-gray-500">{service.description}</p>
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-gray-800">{service.price}</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={16} className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={() => handleBookService(service.title)}
            className="w-full bg-pink-500 text-white hover:bg-pink-600 rounded-full py-6 text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            size="lg"
          >
            Reservar Sesión
            <ArrowRight size={16} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedServiceCard;