import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { blogData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedBlogCard from "./AnimatedBlogCard";

const BlogSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="section-badge">Blog</span>
          <h2 className="section-title">Contenido Inspiracional</h2>
          <p className="section-description">
            Artículos y recursos gratuitos para tu crecimiento personal
          </p>
        </div>
        
        <div className="blog-grid">
          {blogData.map((post, index) => (
            <AnimatedBlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`blog-cta animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Button 
            variant="outline"
            size="lg"
            className="view-all-button"
          >
            Ver todos los artículos
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;