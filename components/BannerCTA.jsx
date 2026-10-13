'use client';
import Image from 'next/image';
import Decorations from './Decorations';
import './BannerCTA.css';

export default function BannerCTA({ id, image, alt, href, external = true, withDecorations = false, sectionClassName = '' }) {
  const linkProps = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };
  return (
    <section id={id} className={`banner-section section-pad ${sectionClassName}`.trim()}>
      {withDecorations && <Decorations />}
      <div className="container reveal">
        <a className="banner-wrap" {...linkProps} aria-label={alt}>
          <Image src={image} alt={alt} width={2170} height={725} quality={90} loading="lazy" className="banner-image" />
        </a>
      </div>
    </section>
  );
}
