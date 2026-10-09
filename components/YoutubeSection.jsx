import { videos } from '../data/youtube';
import { externalLinks } from '../data/navigation';
import YoutubeCard from './YoutubeCard';
import SectionHeading from './SectionHeading';
import ActionLink from './ActionLink';
export default function YoutubeSection() { return <section id="youtube" className="container section-pad youtube-section reveal"><div className="youtube-copy"><SectionHeading eyebrow="DALE PLAY ▶" align="left">También podemos<br />encontrarnos en<br /><span className="script">YouTube</span></SectionHeading><p>A veces una historia se disfruta mejor cuando podemos verla, escucharla y cantarla.</p><p>En mi canal encontrarás canciones infantiles, historias, reflexiones y nuevos contenidos para seguir compartiendo juntos.</p><ActionLink href={externalLinks.youtube} icon="play" pending="El canal de YouTube estará disponible aquí pronto.">Vamos a YouTube</ActionLink></div><div><div className="youtube-grid">{videos.map(video => <YoutubeCard key={video.id} video={video} />)}</div><p className="resource-note">Vistas previas ilustrativas · Videos próximamente</p></div></section>; }
