import { assets } from '../data/assets';
import BannerCTA from './BannerCTA';

export default function RecursosBanner() {
  return (
    <BannerCTA
      image={assets.bannerRecursos}
      alt="Explora los recursos gratuitos y contáctame"
      href="#contacto"
      external={false}
    />
  );
}
