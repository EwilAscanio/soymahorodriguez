import { assets } from '../data/assets';
import Image from 'next/image';
import ActionLink from './ActionLink';
import Icon from './Icon';
export default function Hero() {
  return <section id="inicio" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        {/* <p className="eyebrow">FE · PROPÓSITO · TRANSFORMACIÓN</p> */}
        <h1><span className="sr-only">Una vida de Fe, Propósito y Transformación</span><Image src={assets.heading} alt="" width={1905} height={826} quality={90} className="hero-heading" fetchPriority="high" loading="eager" /></h1>
        <p className="hero-tagline">Crezcamos juntos <span aria-hidden="true">♡</span></p>
        <div className="hero-intro"><p className="hero-question">¿Y si hacemos de la fe una aventura que podamos vivir, crear y compartir juntos?</p><p>Soy Maho, y he creado este espacio para acompañarnos a conocer más a Dios y llevar nuestra fe a la vida real: en casa, con nuestros niños, en la iglesia y también en nuestro propio corazón.</p><p>Aquí encontrarás ideas, recursos gratuitos y mucha inspiración para aprender y enseñar la Palabra de Dios.</p></div>
        <div className="button-row"><ActionLink href="#recursos">Descubre los recursos gratuitos</ActionLink><ActionLink href="#novela" className="button button-outline" icon={null}>Lee Mi Primera Novela</ActionLink></div>
      </div>
      <div className="hero-visual"><div className="hero-blob" /><Image src={assets.desk} alt="Maho Rodríguez en su escritorio, rodeada de libros y detalles rosados" width={1266} height={1242} quality={90} fetchPriority="high" loading="eager" className="hero-photo" /><Icon name="heart" className="hero-heart" size={55} />
      
      {/* <p className="hero-note">Fe ♡<br />Historias<br />Familia<br />Creatividad<br />Vida real ♡</p> */}
      
      </div>
    </div>
  </section>;
}
