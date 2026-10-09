import { assets } from '../data/assets';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
const familyMembers = ['Hijo de Maho', 'Maho Rodríguez', 'Hija de Maho', 'Esposo de Maho'];
export default function AboutMaho() {
  return <section id="sobre-mi" className="about-section section-pad"><div className="container about-grid reveal">
    <div className="about-visual"><div className="portrait-frame"><Image src={assets.portrait} alt="Maho Rodríguez sentada, sonriendo" width={1145} height={1374} quality={90} loading="lazy" /></div></div>
    <div className="about-copy">
      <SectionHeading eyebrow="LA PERSONA DETRÁS DE TODAS ESTAS IDEAS" align="left">¡Hola! Soy <span className="script">Maho Rodríguez</span>. 🤍</SectionHeading>
      <p>Siempre he creído que las historias, las palabras y las pequeñas cosas que hacemos con amor pueden dejar huellas importantes en la vida de otros.</p>
      <p>Me apasiona escribir, comunicar, enseñar y transformar ideas en proyectos que tengan sentido. A lo largo de los años, esa pasión me ha llevado a crear historias, hacer teatro, trabajar con niños y desarrollar recursos que nacen de mi creatividad y de mi fe.</p>
      <p>Mi familia ocupa un lugar muy especial en mi vida. Son mi hogar, mi apoyo en cada etapa y una de mis mayores fuentes de inspiración. Con ellos he aprendido que las experiencias más sencillas, los momentos compartidos y hasta los desafíos pueden convertirse en historias que vale la pena contar.</p>
      <p><em>Este espacio es una forma de reunir todo eso y compartirlo contigo.</em> Mis proyectos, mis experiencias, lo que voy aprendiendo y también los sueños que todavía estoy construyendo.</p>
      <p>Porque sigo creyendo que Dios puede darle propósito incluso a las cosas más sencillas de nuestra historia.</p>
      <hr />
      <blockquote><p>«Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis».</p><cite>Jeremías 29:11 (RVR1960)</cite></blockquote>
      <blockquote><p>«Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas».</p><cite>Josué 1:9 (RVR1960)</cite></blockquote>
    </div>
    <div className="family-collage"><div className="family-portraits">{familyMembers.map((name, index) => <div className="family-portrait" key={name}><Image src={assets.family} alt={name} loading="lazy" quality={90} width={5775} height={1449} style={{ left: `${-index * 100}%` }} /></div>)}</div><p className="script">Familia<br />Fe · Propósito<br />Vida real ♡</p></div>
  </div></section>;
}
