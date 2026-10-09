export const categories = ['Todos', 'Niños', 'Escuela dominical', 'Familia', 'Mujeres', 'Estudio bíblico', 'Teatro y creatividad'];
// PLACEHOLDERS: no downloadable files or resource covers were supplied.
// The CSS covers are illustrative previews, not existing PDFs.
export const resources = [
  { id: 'tiempo', title: 'Mi tiempo con Dios', category: 'Niños', type: 'PDF imprimible', image: null, free: true, downloadUrl: null, cover: 'devotional', coverTitle: 'Mi tiempo\ncon Dios', icon: 'book' },
  { id: 'ideas', title: '10 ideas creativas para Escuela Dominical', category: 'Escuela dominical', type: 'Guía práctica', image: null, free: true, downloadUrl: null, cover: 'ideas', coverTitle: '10 ideas\ncreativas', icon: 'lightbulb' },
  { id: 'familia', title: 'Nuestra familia con propósito', category: 'Familia', type: 'PDF imprimible', image: null, free: true, downloadUrl: null, cover: 'family', coverTitle: 'Nuestra familia\ncon propósito', icon: 'users' },
  { id: 'versiculos', title: 'Versículos que iluminan mi día', category: 'Niños', type: 'Tarjetas imprimibles', image: null, free: true, downloadUrl: null, cover: 'verses', coverTitle: 'Versículos que\niluminan mi día', icon: 'heart' },
];
const referenceRegions = [[59, 831, 126, 107], [206, 831, 126, 107], [353, 831, 128, 107], [500, 831, 125, 107]];
resources.forEach((resource, index) => { resource.referenceRegion = referenceRegions[index]; });
