import React from 'react';
import { Card } from './ui/card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedCard = ({ value, index }) => {
  const [cardRef, isCardVisible] = useIntersectionObserver({ threshold: 0.2, delay: index * 150 });

  return (
    <div ref={cardRef} className={`animate-on-scroll fade-in ${isCardVisible ? 'is-visible' : ''}`}>
      <Card className="value-card">
        <div className="value-icon">
          <value.icon size={24} />
        </div>
        <h3 className="value-title">{value.title}</h3>
        <p className="value-description">{value.description}</p>
      </Card>
    </div>
  );
};

export default AnimatedCard;
