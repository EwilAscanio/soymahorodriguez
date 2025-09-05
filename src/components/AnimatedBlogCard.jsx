import React from 'react';
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedBlogCard = ({ post, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1, delay: index * 150 });

  const handleReadMore = (title) => {
    console.log(`Reading post: ${title}`);
  };

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="blog-card">
        <div className="blog-image">
          <img 
            src={post.image} 
            alt={post.title}
            className="post-image"
          />
          <div className="image-overlay">
            <Button 
              onClick={() => handleReadMore(post.title)}
              className="read-button"
              size="sm"
            >
              Leer más
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
        
        <CardHeader className="blog-header">
          <div className="post-meta">
            <span className="post-date">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="post-read-time">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <h3 className="post-title">{post.title}</h3>
        </CardHeader>
        
        <CardContent className="blog-content">
          <p className="post-excerpt">{post.excerpt}</p>
          <Button 
            variant="ghost"
            onClick={() => handleReadMore(post.title)}
            className="read-more-button"
          >
            Leer artículo completo
            <ArrowRight size={16} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedBlogCard;
