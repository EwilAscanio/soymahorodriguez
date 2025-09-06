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
      <Card className="ebook-card">
        <div className="ebook-image-container">
          <img 
            src={book.image} 
            alt={book.title}
            className="ebook-image"
          />
          <div className="ebook-overlay">
            <Button 
              onClick={() => handlePreview(book)}
              className="preview-button"
              size="sm"
              variant="outline"
            >
              <Book size={16} />
              Vista Previa
            </Button>
          </div>
          <Badge className="ebook-category-badge">
            {book.category}
          </Badge>
        </div>
        
        <CardHeader className="ebook-header">
          <div className="ebook-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="star filled" />
            ))}
            <span className="rating-text">(4.8)</span>
          </div>
          
          <CardTitle className="ebook-title">{book.title}</CardTitle>
          
          <div className="ebook-price-container">
            <span className="ebook-price">{book.price}</span>
            {book.price === "Gratuito" && (
              <Badge variant="secondary" className="free-badge">
                <Download size={12} />
                Descarga Gratis
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="ebook-content">
          <p className="ebook-description">{book.description}</p>
          
          <div className="ebook-features">
            <h4 className="features-title">¿Qué incluye?</h4>
            <ul className="features-list">
              {book.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-bullet">✨</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="ebook-actions">
            <Button 
              onClick={() => handleBuyBook(book)}
              className="buy-button"
              size="lg"
            >
              <ShoppingCart size={16} />
              {book.price === "Gratuito" ? "Descargar Gratis" : "Comprar en Amazon"}
              <ExternalLink size={14} className="external-icon" />
            </Button>
            
            <Button 
              onClick={() => handlePreview(book)}
              variant="outline"
              className="preview-button-secondary"
              size="lg"
            >
              <Book size={16} />
              Leer Muestra
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedEbookCard;
