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
      <Card className="bg-white border border-pink-50/10 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-lg hover:border-pink-200">
        <div className="relative w-full h-52 overflow-hidden group">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <Button 
              onClick={() => handleReadMore(post.title)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-none px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
              size="sm"
            >
              Leer más
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
        
        <CardHeader className="p-6 pb-0">
          <div className="flex gap-4 mb-4">
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-0">{post.title}</h3>
        </CardHeader>
        
        <CardContent className="p-6 pt-4">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
          <Button 
            variant="ghost"
            onClick={() => handleReadMore(post.title)}
            className="text-pink-600 bg-transparent border-none p-0 font-medium flex items-center gap-2 transition-colors duration-200 ease-in-out hover:text-pink-700"
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
