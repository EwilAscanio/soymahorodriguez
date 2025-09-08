import React from 'react';
import { Card } from './ui/card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedCard = ({ value, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.2, delay: index * 150 });

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="bg-[linear-gradient(135deg,_#FCE7F3_0%,_#FFFFFF_100%)] border border-pink-500/10 p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-md hover:border-pink-300">
        <div className="w-12 h-12 bg-[linear-gradient(135deg,_#F9A8D4_0%,_#EC4899_100%)] rounded-xl flex items-center justify-center text-white flex-shrink-0">
          <value.icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
        <p className="text-sm text-gray-500 leading-normal">{value.description}</p>
      </Card>
    </div>
  );
};

export default AnimatedCard;
