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
    <section id="blog" className="py-24 sm:py-32 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Blog</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Contenido Inspiracional</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Artículos y recursos gratuitos para tu crecimiento personal
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blogData.map((post, index) => (
            <AnimatedBlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className={`mt-12 flex justify-center animate-on-scroll fade-in ${isCtaVisible ? 'is-visible' : ''}`}>
          <Button 
            variant="outline"
            size="lg"
            className="inline-flex items-center gap-2 rounded-full border-2 border-pink-500 px-8 py-3 text-base font-semibold text-pink-500 transition hover:bg-pink-500 hover:text-white"
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