'use client';
import { useState } from 'react';
import Image from 'next/image';
import { assets } from '../data/assets';
import { externalLinks } from '../data/navigation';
import ActionLink from './ActionLink';
import Decorations from './Decorations';

const buttonPosition = { right: '250px', bottom: '30px' };

export default function NovelaBanner() {
  const [hover, setHover] = useState(false);
  return (
    <section id="novela" className="novela-section section-pad">
      <Decorations />
      <div className="container reveal">
        <div className="novela-banner-wrap" style={{ position: 'relative', display: 'block' }}>
          <Image src={assets.banner} alt="Banner de la novela" width={2171} height={724} quality={90} loading="lazy" className="novela-banner" />
          <ActionLink
            href={externalLinks.novela}
            className="button button-ghost novela-banner-button"
            icon="external"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ ...buttonPosition, position: 'absolute', zIndex: 1, color: '#000', borderColor: '#000', transform: hover ? 'scale(1.08)' : 'scale(1)', transition: 'transform .2s ease' }}
          >
            Comprar el libro
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
