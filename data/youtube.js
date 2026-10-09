import { assets } from './assets';
// PLACEHOLDERS: editorial samples, not fetched videos. Replace with verified
// videoId, title, category, thumbnail and url from a future API response.
export const videos = [
  { id: 'historias', videoId: null, title: 'Historias bíblicas para pequeños corazones', category: 'HISTORIAS PARA NIÑOS', thumbnail: assets.bible, url: null },
  { id: 'canciones', videoId: null, title: 'Un mundo para imaginar y cantar', category: 'CANCIONES Y AVENTURAS', thumbnail: assets.tales, url: null },
  { id: 'reflexiones', videoId: null, title: 'Fe y propósito en nuestra vida real', category: 'REFLEXIONES CON MAHO', thumbnail: assets.desk, url: null },
];
const referenceRegions = [[272, 1526, 121, 71], [408, 1526, 122, 71], [545, 1526, 118, 71]];
videos.forEach((video, index) => { video.referenceRegion = referenceRegions[index]; });
