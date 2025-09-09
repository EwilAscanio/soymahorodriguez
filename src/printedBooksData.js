// Mock data for Maho Rodríguez Landing Page
import Libro21Consejos from "../public/images/Libro21consejos.jpg";
import LibroUnMundoAventuras from "../public/images/LibroUnmundo.jpg";
import LibroCuentos from "../public/images/LibroCuentos.jpg";

export const printedBooksData = [
  {
    id: 1,
    title: "21 Consejos en Tiempos de Dificultad",
    description: "En medio de la espera de los resultados de una biopsia en mi seno, El Espíritu Santo me movió a compartir un consejo diariamente. Este es el resultado de ese desafío del Señor. Hoy te animo a cambiar la estrategia en medio del dolor y la espera.",
    category: "Desarrollo Personal",
    price: "$20 USD",
    amazonLink: "https://www.amazon.com/dp/B0FN467VWJ",
    image: Libro21Consejos,
    features: ["21 consejos inspiradores", "Experiencias reales", "Guía durante momentos difíciles", "Formato impreso"]
  },
  {
    id: 2,
    title: "Un Mundo de Aventuras Bíblicas. Devocionales para Niños",
    description: "Devocionales infantiles que le brindarán a los pequeños de la casa una auténtica experiencia con Dios. Más que historias, este ebook te desafía a vivir con tus hijos momentos inolvidables.",
    category: "Familia & Niños",
    price: "$0 USD",
    amazonLink: "https://www.amazon.com/",
    image: LibroUnMundoAventuras,
    features: ["Devocionales diarios", "Actividades familiares", "Valores cristianos", "Momentos de conexión"],
    status: "Pronto Disponible",
    disabled: true
  },
  {
    id: 3,
    title: "Un Mundo de Aventuras - Cuentos Infantiles",
    description: "Con el propósito de fomentar valores y principios en los pequeños de casa, estos 6 personajes atraviesan circunstancias que los desafían a ser valientes, respetuosos y salir de los problemas trabajando en equipo.",
    category: "Cuentos Infantiles",
    price: "$0 USD",
    amazonLink: "https://www.amazon.com/",
    image: LibroCuentos,
    features: ["6 personajes únicos", "Valores y principios", "Trabajo en equipo", "Aventuras emocionantes"],
    status: "Pronto Disponible",
    disabled: true
  }
];
