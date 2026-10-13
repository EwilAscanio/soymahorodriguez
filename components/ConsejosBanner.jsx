import { assets } from '../data/assets';
import { externalLinks } from '../data/navigation';
import BannerCTA from './BannerCTA';

export default function ConsejosBanner() {
  return (
    <BannerCTA
      id="consejos"
      image={assets.bannerConsejos}
      alt="21 Consejos para tiempos de dificultad — comprar el libro"
      href={externalLinks.consejos}
    />
  );
}
