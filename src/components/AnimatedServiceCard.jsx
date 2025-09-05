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
      <Card className="service-card">
        <CardHeader className="service-header">
          <div className="service-icon">
            <IconComponent size={32} />
          </div>
          <CardTitle className="service-title">{service.title}</CardTitle>
          <p className="service-description">{service.description}</p>
        </CardHeader>
        
        <CardContent className="service-content">
          <div className="service-price">{service.price}</div>
          
          <ul className="service-features">
            {service.features.map((feature, index) => (
              <li key={index} className="service-feature">
                <Check size={16} className="check-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={() => handleBookService(service.title)}
            className="service-button"
            size="lg"
          >
            Reservar Sesión
            <ArrowRight size={16} className="button-icon" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedServiceCard;
