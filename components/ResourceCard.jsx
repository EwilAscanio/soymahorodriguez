import Image from 'next/image';
import Icon from './Icon';
import ActionLink from './ActionLink';
import ReferenceArt from './ReferenceArt';
export default function ResourceCard({ resource }) { return <article className="resource-card card"><div className={`resource-art cover-${resource.cover}`}><span className="free-badge">GRATIS ♡</span>{resource.image ? <Image src={resource.image} alt={`Portada de ${resource.title}`} quality={90} loading="lazy" /> : <ReferenceArt region={resource.referenceRegion} alt={`Vista previa del mockup: ${resource.title}`} />}</div><div className="resource-body"><p className="eyebrow">{resource.category}</p><h3>{resource.title}</h3><p className="resource-type"><Icon name="book" size={15} />{resource.type}</p><ActionLink href={`/?recurso=${encodeURIComponent(resource.title)}#contacto`} className="button button-outline resource-download" icon="mail">Solicitalo</ActionLink></div></article>; }
