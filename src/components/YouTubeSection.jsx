import React from "react";
import { youtubeVideosData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"; // Import Button
import { Play, Calendar, Eye, Share2 } from "lucide-react"; // Import icons
import { formatDate, formatViews } from "../lib/utils"; // Import utility functions

const YouTubeSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="youtube" className="bg-gray-50 py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">YouTube</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Contenido en Video</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Consejos y contenidos para toda la familia en mi canal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {youtubeVideosData.map((video, index) => (
            <div key={video.id} className="animate-on-scroll fade-in" style={{ transitionDelay: `${index * 150}ms` }}>
              <Card className="group bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay de botón de reproducción */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="lg"
                        className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900 rounded-full p-4 transition-all duration-300"
                      >
                        <Play className="w-6 h-6" />
                      </Button>
                    </a>
                  </div>

                  {/* Badge de duración */}
                  {video.duration && (
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                  )}

                  {/* Badge de categoría */}
                  {video.category && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-white text-sm font-medium bg-pink-600">
                        {video.category}
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {video.date && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(video.date)}</span>
                      </div>
                    )}
                    {video.views && (
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{formatViews(video.views)} vistas</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button 
                        asChild
                        className="w-full bg-pink-500 text-white hover:bg-pink-600 rounded-full py-3 text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>
                          <Play className="w-4 h-4 mr-2" />
                          Ver Video
                        </span>
                      </Button>
                    </a>
                    <Button 
                      size="icon"
                      variant="outline"
                      className="border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
