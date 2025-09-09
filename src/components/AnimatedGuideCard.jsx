import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Clock } from "lucide-react";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedGuideCard = ({ guide, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.1, delay: index * 150 });

  const handleDownload = () => {
    if (guide.isAvailable) {
      window.open(guide.fileUrl, '_blank');
    }
  };

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="bg-white border border-pink-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 flex items-center justify-center h-48"> {/* Added h-48 and centering */}
            <img src={guide.image} alt={guide.title} className="w-full h-full object-cover rounded-lg" /> {/* Added h-full object-cover */}
          </div>
          <div className="p-6 flex flex-col justify-center">
            <CardTitle className="text-xl font-bold text-gray-800 mb-2">{guide.title}</CardTitle>
            <p className="text-sm text-gray-500 mb-4">{guide.description}</p>
            {guide.isAvailable ? (
              <Button
                onClick={handleDownload}
                className="w-full bg-pink-500 text-white hover:bg-pink-600 rounded-full py-3 text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                size="lg"
              >
                <Download size={16} />
                Descargar
              </Button>
            ) : (
              <Button
                disabled
                className="w-full bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] text-white rounded-full py-3 text-base font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" // Changed styles
                size="lg"
              >
                <Clock size={16} />
                Próximamente
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnimatedGuideCard;
