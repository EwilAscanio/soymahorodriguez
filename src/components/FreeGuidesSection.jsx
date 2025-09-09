import React from "react";
import { freeGuidesData } from "../mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedGuideCard from "./AnimatedGuideCard";

const FreeGuidesSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="free-guides" className="bg-white py-24 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>
          <span className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-pink-300">Guías Gratuitas</span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-pink-500 bg-clip-text text-transparent">Recursos para tu Crecimiento</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descarga estas guías gratuitas diseñadas para ayudarte en tu camino de fe y desarrollo personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {freeGuidesData.map((guide, index) => (
            <AnimatedGuideCard key={guide.id} guide={guide} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeGuidesSection;
