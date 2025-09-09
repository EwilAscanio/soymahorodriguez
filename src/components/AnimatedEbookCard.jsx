import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Book, ShoppingCart, ExternalLink, Star, Download } from "lucide-react";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedEbookCard = ({ book, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1, delay: index * 150 });

  const handleBuyBook = (book) => {
    // Redirect to the Amazon link for the book
    console.log(`Redirecting to Amazon for: ${book.title}`);
    window.open(book.amazonLink, '_blank');
  };

  const handlePreview = (book) => {
    console.log(`Preview for: ${book.title}`);
  };

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="group bg-white border border-pink-500/10 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-3 hover:shadow-lg hover:border-pink-300">
        <div className="relative w-full h-72 overflow-hidden bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)]">
          <img 
            src={book.image} 
            alt={book.title}
            className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button 
              onClick={() => handlePreview(book)}
              className="bg-white text-pink-600 border-2 border-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-transform duration-200 hover:scale-105 hover:bg-pink-600 hover:text-white"
              size="sm"
              variant="outline"
            >
              <Book size={16} />
              Vista Previa
            </Button>
          </div>
          {/* Se dedhabilita la categoria temporalmente, activar si se desea mostrar
          <Badge className="absolute top-4 right-4 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white border-none px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
            {book.category}
          </Badge> */}
        </div>
        
        <CardHeader className="p-6 pb-4">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2 font-medium">(4.8)</span>
          </div>
          
          <CardTitle className="text-xl font-bold text-gray-800 leading-tight mb-4 line-clamp-2">{book.title}</CardTitle>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-2xl font-extrabold text-pink-600">{book.price}</span>
            {book.price === "Gratuito" && (
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 border border-pink-300 flex items-center gap-1 text-xs font-semibold">
                <Download size={12} />
                Descarga Gratis
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6 pt-0">
          <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">{book.description}</p>
          
          <div className="bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)] p-6 rounded-2xl mb-6 border border-pink-500/10">
            <h4 className="text-base font-semibold text-gray-800 mb-4">¿Qué incluye?</h4>
            <ul className="space-y-3">
              {book.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-lg text-pink-600 flex-shrink-0">✨</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => handleBuyBook(book)}
              className="group bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white border-none px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              size="lg"
            >
              <ShoppingCart size={16} />
              {book.price === "Gratuito" ? "Descargar Gratis" : "Comprar en Amazon"}
              <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            
            {/* Boton de vista previa deshabilitado temporalmente 
            <Button 
              onClick={() => handlePreview(book)}
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 bg-transparent px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-pink-100 hover:border-pink-600 hover:-translate-y-0.5"
              size="lg"
            >
              <Book size={16} />
              Leer Muestra
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedEbookCard;
