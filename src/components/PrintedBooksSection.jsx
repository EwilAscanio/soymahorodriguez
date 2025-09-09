import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Book } from "lucide-react";
import { printedBooksData } from "../printedBooksData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedPrintedBookCard from "./AnimatedPrintedBookCard";

const PrintedBooksSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="printed-books" className="relative bg-white py-24 px-8">
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[var(--gradient-soft)] to-transparent z-0" />
      <div className="relative max-w-screen-xl mx-auto z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Libros Impresos</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Mis Libros Impresos en Amazon.com</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Adquiere contenido inspirador que transformará tu perspectiva y fortalecerá tu familia
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-10 mb-16">
          {printedBooksData.map((book, index) => (
            <AnimatedPrintedBookCard key={book.id} book={book} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`flex justify-center animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
        </div>
      </div>
    </section>
  );
};

export default PrintedBooksSection;
