import ActionLink from './ActionLink';
import ReferenceArt from './ReferenceArt';
export default function YoutubeCard({ video }) { return <article className="youtube-card"><div className="youtube-thumbnail"><ReferenceArt region={video.referenceRegion} alt={`Vista previa ilustrativa: ${video.title}`} /><ActionLink href={video.url} className="play-button" icon="play" pending="Pronto podrás ver este contenido. El video aún no está conectado."><span className="sr-only">Reproducir {video.title}</span></ActionLink></div><p className="eyebrow">{video.category}</p><h3>{video.title}</h3></article>; }
