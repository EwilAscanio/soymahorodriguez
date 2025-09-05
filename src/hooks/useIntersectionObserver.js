import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const delay = options?.delay || 0;
        setTimeout(() => {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }, delay);
      }
    }, { threshold: options?.threshold || 0 });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
