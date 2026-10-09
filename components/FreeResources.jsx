'use client';
import { categories, resources } from '../data/resources';
import ResourceCard from './ResourceCard';
import SectionHeading from './SectionHeading';
import Icon from './Icon';
export default function FreeResources({ filter, onFilter }) {
  const visible = resources.filter(resource => filter === 'Todos' || resource.category === filter);
  return <section id="recursos" className="resources-section section-pad"><div className="container reveal"><SectionHeading eyebrow="PARA SOLICITAR · COMPARTIR · DISFRUTAR" description={<><p>Porque cuando encontramos algo que puede ayudar a alguien más,<br className="hidden md:block" /> compartirlo también es una forma de servir.</p><p>He preparado una biblioteca de recursos gratuitos para encontrar ideas, actividades para niños, materiales para clases, estudios bíblicos y recursos para la familia.</p></>}>Cositas que preparé <span className="script">para ti ♡</span></SectionHeading><div className="filters" role="group" aria-label="Filtrar recursos por categoría">{categories.map(category => <button type="button" key={category} aria-pressed={filter === category} className={`filter ${filter === category ? 'active' : ''}`} onClick={() => onFilter(category)}>{category}</button>)}</div><p className="resource-note">Vistas previas ilustrativas. Solicita el que más te sirva y te lo hago llegar ♡</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 resource-grid">{visible.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div><p className={visible.length ? 'sr-only' : 'empty-state'} role="status" aria-live="polite">{visible.length ? `${visible.length} recursos en ${filter}.` : 'Estamos preparando nuevos recursos para esta categoría. Vuelve pronto ♡'}</p><div className="center-action">
    {/* <button type="button" className="button" onClick={() => onFilter('Todos')}>Quiero ver los recursos gratuitos<Icon name="arrow" size={17} /></button> */}
    </div></div></section>;
}

