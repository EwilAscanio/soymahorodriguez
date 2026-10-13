import { assets } from '../data/assets';
import { externalLinks } from '../data/navigation';
import BannerCTA from './BannerCTA';

export default function NovelaBanner() {
  return (
    <BannerCTA
      id="novela"
      image={assets.bannerNovela}
      alt="Más allá de las fronteras — comprar el libro"
      href={externalLinks.novela}
      withDecorations
    />
  );
}
