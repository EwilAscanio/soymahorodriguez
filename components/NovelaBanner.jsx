'use client';
import Image from 'next/image';
import { assets } from '../data/assets';
import { externalLinks } from '../data/navigation';
import Decorations from './Decorations';
import './NovelaBanner.css';

export default function NovelaBanner() {
  return (
    <section id="novela" className="novela-section section-pad">
      <Decorations />
      <div className="container reveal">
        <a
          className="novela-banner-wrap novela-banner-link"
          href={externalLinks.novela}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar el libro Más allá de las fronteras"
        >
          <Image src={assets.banner} alt="Banner de la novela" width={2171} height={724} quality={90} loading="lazy" className="novela-banner" />
          <span className="button novela-banner-button">
            Comprar el libro
          </span>
        </a>
      </div>
    </section>
  );
}
