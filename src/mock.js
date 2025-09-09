// Mock data for Maho Rodríguez Landing Page
import MahoHero from "../public/images/mahohero.jpg";
import MahoAbout from "../public/images/imageSobremi.jpg";
import Ebooks21Consejos from "../public/images/Ebooks21consejos.jpg";
import EbooksUnMundoAventuras from "../public/images/EbooksUnmundo.jpg";
import EbooksCuentos from "../public/images/EbooksCuentos.jpg";


export const heroData = {
  title: "Mujeres de Fe y Proposito, Crezcamos Juntas",
  subtitle: "Soy Maho Rodríguez, con más de 20 años contando historias que reflejan su fe. Ahora, su pasión por el teatro se expande a la escritura, compartiendo su propio camino de vida a través de su primer e-book.",
  ctaText: "Contactame",
  profileImage: MahoHero,
  //profileImage: "https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
};

export const aboutData = {
  title: "Sobre Mí",
  description: "Maholy Rodríguez es comunicadora, directora teatral y escritora con más de 20 años de experiencia. Su pasión por contar historias, un reflejo de su profunda fe, la ha llevado a expandir su vocación al mundo de la escritura. Su vida personal, marcada por su rol como esposa y madre, y por los desafíos que ha superado —como la enfermedad de su hija y la experiencia de ser migrante—, le ha brindado una gran empatía y sabiduría. Su mayor deseo es que sus escritos inspiren y ofrezcan herramientas a quienes buscan superar los retos de la vida.",
  mission: "Mi mision es inspirar a través de historias que fortalezcan la fe y ofrezcan herramientas prácticas para enfrentar los desafíos de la vida, transformando los tiempos de espera en oportunidades de crecimiento personal.",
  image: MahoAbout
  //image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
};

export const servicesData = [
  {
    id: 1,
    title: "Coaching Individual",
    description: "Sesiones personalizadas 1:1 para trabajar en tus objetivos específicos y crear un plan de acción personalizado.",
    icon: "User",
    price: "Desde $150 USD",
    features: ["Sesión de 60 minutos", "Plan personalizado", "Seguimiento continuo", "Material de apoyo"]
  },
  {
    id: 2,
    title: "Programa Empoderamiento",
    description: "Programa grupal de 8 semanas diseñado para fortalecer tu autoestima y confianza personal.",
    icon: "Users",
    price: "Desde $299 USD",
    features: ["8 sesiones grupales", "Comunidad privada", "Workbook digital", "Sesión bonus 1:1"]
  },
  {
    id: 3,
    title: "Mentoría Empresarial",
    description: "Para mujeres emprendedoras que buscan equilibrar su crecimiento personal con el éxito profesional.",
    icon: "Briefcase",
    price: "Desde $500 USD",
    features: ["Plan de negocios", "Desarrollo de mindset", "Estrategias de crecimiento", "Networking exclusivo"]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "María González",
    profession: "Empresaria",
    content: "Trabajar con Maho cambió completamente mi perspectiva. Ahora tengo la confianza para perseguir mis sueños y he logrado cosas que antes creía imposibles.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
  },
  {
    id: 2,
    name: "Ana Martínez",
    profession: "Profesional de Marketing",
    content: "El programa de empoderamiento fue exactamente lo que necesitaba. Maho tiene una forma única de hacer que te sientas escuchada y comprendida.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Carmen López",
    profession: "Madre y Emprendedora",
    content: "Gracias a Maho aprendí a valorarme y a establecer límites saludables. Mi vida familiar y profesional han mejorado increíblemente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

export const blogData = [
  {
    id: 1,
    title: "5 Pasos para Desarrollar tu Autoestima",
    excerpt: "Descubre las claves fundamentales para construir una autoestima sólida y duradera.",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "15 Mar 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Cómo Establecer Límites Saludables",
    excerpt: "Aprende a decir 'no' sin culpa y a proteger tu energía emocional.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80",
    date: "10 Mar 2024",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "El Poder de la Visualización",
    excerpt: "Técnicas efectivas para usar la visualización como herramienta de transformación.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "5 Mar 2024",
    readTime: "6 min"
  }
];

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/soymahorodriguez", icon: "Instagram" },
  { name: "Facebook", url: "https://facebook.com/soymahorodriguez", icon: "Facebook" },
  { name: "YouTube", url: "https://youtube.com/@soymahorodriguez", icon: "Youtube" },
  { name: "LinkedIn", url: "https://linkedin.com/in/maho-rodriguez", icon: "Linkedin" }
];

export const ebooksData = [
  {
    id: 1,
    title: "21 Consejos en Tiempos de Dificultad",
    description: "En medio de la espera de los resultados de una biopsia en mi seno, El Espíritu Santo me movió a compartir un consejo diariamente. Este es el resultado de ese desafío del Señor. Hoy te animo a cambiar la estrategia en medio del dolor y la espera.",
    category: "Desarrollo Personal",
    //price: "Gratuito",
    price: "$13 USD",
    amazonLink: "https://www.amazon.com/CONSEJOS-PARA-TIEMPOS-DIFICULTAD-FILIPENSES-ebook/dp/B0FLVS33L6/ref=sr_1_1?sr=8-1", // Placeholder link
    image: Ebooks21Consejos,
    features: ["21 consejos inspiradores", "Experiencias reales", "Guía durante momentos difíciles", "Formato digital"]
  },
  {
    id: 2,
    title: "Un Mundo de Aventuras Bíblicas. Devocionales para Niños",
    description: "Devocionales infantiles que le brindarán a los pequeños de la casa una auténtica experiencia con Dios. Más que historias, este ebook te desafía a vivir con tus hijos momentos inolvidables.",
    category: "Familia & Niños",
    price: "$10 USD",
    amazonLink: "https://www.amazon.com/Mundo-Aventuras-B%C3%ADblicas-Vol-Historias-ebook/dp/B0FLG9Y13C/ref=sr_1_2?sr=8-2", // Placeholder link
    image: EbooksUnMundoAventuras,
    features: ["Devocionales diarios", "Actividades familiares", "Valores cristianos", "Momentos de conexión"]
  },
  {
    id: 3,
    title: "Un Mundo de Aventuras - Cuentos Infantiles",
    description: "Con el propósito de fomentar valores y principios en los pequeños de casa, estos 6 personajes atraviesan circunstancias que los desafían a ser valientes, respetuosos y salir de los problemas trabajando en equipo.",
    category: "Cuentos Infantiles",
    price: "$12 USD",
    amazonLink: "https://www.amazon.com/Mundo-Aventuras-Cuentos-Infantiles-Spanish-ebook/dp/B0FLG5S77F/ref=sr_1_1?sr=8-1", // Placeholder link
    image: EbooksCuentos,
    features: ["6 personajes únicos", "Valores y principios", "Trabajo en equipo", "Aventuras emocionantes"]
  }
];

export const contactInfo = {
  email: "hola@soymahorodriguez.com",
  phone: "+58 (414) 4053277 ",
  location: "Ciudad de Valencia, Venezuela"
};