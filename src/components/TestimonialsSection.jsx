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
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Testimonios</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Lo que dicen mis clientas</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Historias reales de transformación y crecimiento personal
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className={`relative mt-12 animate-on-scroll fade-in ${isCarouselVisible ? 'is-visible' : ''}`}>
          <div className="relative flex items-center gap-8 mb-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="hidden md:flex flex-shrink-0 w-12 h-12 border-2 border-pink-200 bg-white text-pink-500 rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:bg-pink-500 hover:text-white hover:scale-110 z-10"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex-1 relative h-96 overflow-hidden rounded-2xl">
              {testimonialsData.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100/50 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 shadow-lg' : 'opacity-70'}`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <CardContent className="p-8 sm:p-12 h-full flex flex-col justify-center text-center">
                    <div className="text-pink-200 mb-4 flex justify-center">
                      <Quote size={32} />
                    </div>
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-base sm:text-lg italic text-gray-600 leading-relaxed mb-8 flex-1 flex items-center">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="text-left">
                        <span className="block font-semibold text-gray-800 text-base">{testimonial.name}</span>
                        <span className="block text-sm text-gray-500">{testimonial.profession}</span>
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
              className="hidden md:flex flex-shrink-0 w-12 h-12 border-2 border-pink-200 bg-white text-pink-500 rounded-full items-center justify-center transition-all duration-300 ease-in-out hover:bg-pink-500 hover:text-white hover:scale-110 z-10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-200 ease-in-out ${index === currentIndex ? 'bg-pink-500 scale-125' : 'bg-pink-200/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;