import Image from 'next/image';
import reference from '../public/assets/pagefull-reference.webp';

// Render only the specified visual region of the supplied reference, without
// modifying the source. Coordinates use a normalized 683 × 2048 canvas.
// These previews are replaced with separate original assets when supplied.
export default function ReferenceArt({ region, alt, className = '' }) {
  const [x, y, width, height] = region;
  return <div className={`reference-art ${className}`} style={{ aspectRatio: `${width} / ${height}` }}><Image src={reference} alt={alt} loading="lazy" quality={90} width={724} height={2172} style={{ width: `${683 / width * 100}%`, height: `${2048 / height * 100}%`, left: `${-x / width * 100}%`, top: `${-y / height * 100}%` }} /></div>;
}



