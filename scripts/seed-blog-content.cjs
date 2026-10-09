const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

function loadEnvFiles() {
  for (const file of ['.env.local', '.env']) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) continue;
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!match) continue;
      let value = match[2];
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(match[1] in process.env)) process.env[match[1]] = value;
    }
  }
}

function paragraphs(categoryName, title) {
  return [
    `En un mundo que corre a mil por hora, ${categoryName.toLowerCase()} nos invita a detenernos un momento. Este artículo de «${title}» nace de una inquietud sencilla: vivir la fe de una forma real, natural y cercana a casa.`,
    'Cada familia tiene su propio ritmo, sus horarios, sus canciones y sus silencios. La propuesta no es añadir una tarea más a la lista, sino encontrar esos pequeños gestos cotidianos donde lo sagrado ya está sucediendo.',
    'La mesa, el camino al colegio, la hora de dormir: esos son los lugares donde las historias se cuentan y se guardan. Ahí aprendemos que hablar de Dios no exige un lenguaje difícil, sino un corazón atento.',
  ];
}

function buildContent(categoryName, title) {
  const text = paragraphs(categoryName, title);
  return {
    type: 'doc',
    content: [
      { type: 'heading', attrs: { level: 2 }, content: [{ type: 'text', text: 'Un punto de partida' }] },
      { type: 'paragraph', content: [{ type: 'text', text: text[0] }] },
      { type: 'heading', attrs: { level: 3 }, content: [{ type: 'text', text: 'En lo cotidiano' }] },
      { type: 'paragraph', content: [{ type: 'text', text: text[1] }] },
      {
        type: 'bulletList',
        content: text.map((p) => ({
          type: 'listItem',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: p }] }],
        })),
      },
      {
        type: 'blockquote',
        content: [
          {
            type: 'paragraph',
            content: [
              { type: 'text', text: '«Guardar las cosas en el corazón no es olvidarlas, es dejar que trabajen en nosotros.»' },
            ],
          },
        ],
      },
      { type: 'paragraph', content: [{ type: 'text', text: text[2] }] },
      {
        type: 'paragraph',
        content: [
          { type: 'text', text: 'Prueba con esta ' },
          { type: 'text', marks: [{ type: 'link', attrs: { href: 'https://soymahorodriguez.com', target: null, rel: null, class: null } }], text: 'idea para empezar' },
          { type: 'text', text: ' y cuéntanos cómo te fue.' },
        ],
      },
    ],
  };
}

const CATEGORIES = [
  { name: 'Fe', slug: 'fe', description: 'Reflexiones y acercamientos a la vida espiritual.' },
  { name: 'Familia', slug: 'familia', description: 'Convivencia, educación y momentos compartidos.' },
  { name: 'Devocionales', slug: 'devocionales', description: 'Rutinas breves para orar y meditar.' },
  { name: 'Recursos', slug: 'recursos', description: 'Materiales e ideas prácticas para tu casa.' },
];

const ARTICLES = [
  {
    title: 'Cómo empezar un devocional en familia sin morir en el intento',
    slug: 'devocional-familiar-paso-a-paso',
    category: 'devocionales',
    publishedDaysAgo: 3,
    cover: 'https://picsum.photos/seed/soymaho-dev/1200/750',
    excerpt: 'Cinco ideas sencillas para que la oración en casa deje de ser una aspiración y se vuelva un hábito que se disfruta.',
  },
  {
    title: 'Señales de que tu fe se está volviendo más adulta',
    slug: 'fe-mas-adulta',
    category: 'fe',
    publishedDaysAgo: 6,
    cover: 'https://picsum.photos/seed/soymaho-fe/1200/750',
    excerpt: 'No todo cambio en la vida espiritual se nota a simple vista. Estas señales silenciosas te ayudarán a reconocer el camino.',
  },
  {
    title: 'La mesa como altar: tradiciones que unen',
    slug: 'la-mesa-como-altar',
    category: 'familia',
    publishedDaysAgo: 9,
    cover: 'https://picsum.photos/seed/soymaho-mesa/1200/750',
    excerpt: 'El compartir la comida es mucho más que alimentarse. Descubre cómo convertir la mesa en el corazón de la vida familiar.',
  },
  {
    title: 'Biblia para niños: por dónde empezar',
    slug: 'biblia-para-ninos-por-donde-empezar',
    category: 'recursos',
    publishedDaysAgo: 12,
    cover: 'https://picsum.photos/seed/soymaho-biblia/1200/750',
    excerpt: 'Una guía práctica para acercar a los más pequeños a las Escrituras con historias, preguntas y mucha paciencia.',
  },
  {
    title: 'Salmos para momentos difíciles',
    slug: 'salmos-para-momentos-dificiles',
    category: 'fe',
    publishedDaysAgo: 15,
    cover: 'https://picsum.photos/seed/soymaho-salmos/1200/750',
    excerpt: 'Cuando las palabras no alcanzan, los salmos prestan las suyas. Una ruta breve para orar con el corazón herido.',
  },
  {
    title: 'Noche de preguntas: ritual semanal para conectar',
    slug: 'noche-de-preguntas',
    category: 'familia',
    publishedDaysAgo: 18,
    cover: 'https://picsum.photos/seed/soymaho-noche/1200/750',
    excerpt: 'Un viernes al mes, ninguna pantalla encendida y una sola regla: todas las preguntas son bienvenidas.',
  },
  {
    title: 'El arte de escuchar a tus hijos cuando rezan',
    slug: 'escuchar-a-tus-hijos-cuando-rezan',
    category: 'devocionales',
    publishedDaysAgo: 22,
    cover: 'https://picsum.photos/seed/soymaho-escuchar/1200/750',
    excerpt: 'Lo que los niños cuentan en oración es una ventana a su mundo interior. Aprende a escucharlos sin interrumpir.',
  },
  {
    title: 'Planificador de vida espiritual para el año',
    slug: 'planificador-vida-espiritual',
    category: 'recursos',
    publishedDaysAgo: 26,
    cover: 'https://picsum.photos/seed/soymaho-plan/1200/750',
    excerpt: 'Un cuaderno descargable con metas mensuales de oración, lectura y servicio para toda la familia.',
  },
  {
    title: 'Tres prácticas para crecer en gratitud',
    slug: 'tres-practicas-para-crecer-en-gratitud',
    category: 'devocionales',
    publishedDaysAgo: 31,
    cover: 'https://picsum.photos/seed/soymaho-gratitud/1200/750',
    excerpt: 'La gratitud no es un sentimiento que llega solo: se entrena. Tres prácticas simples para ejercitarla en casa.',
  },
  {
    title: 'Cuando la fe se siente lejos',
    slug: 'cuando-la-fe-se-siente-lejos',
    category: 'fe',
    publishedDaysAgo: 35,
    cover: null,
    excerpt: 'Hay temporadas de sequía espiritual. Hablar de ellas con honestidad es, en sí mismo, un acto de fe.',
  },
];

async function main() {
  loadEnvFiles();
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL no encontrada');

  const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

  const categoryIds = new Map();
  for (const c of CATEGORIES) {
    const existing = await pool.query('SELECT id FROM categories WHERE slug = $1', [c.slug]);
    if (existing.rows.length > 0) {
      categoryIds.set(c.slug, existing.rows[0].id);
    } else {
      const inserted = await pool.query(
        'INSERT INTO categories (name, slug, description) VALUES ($1, $2, $3) RETURNING id',
        [c.name, c.slug, c.description]
      );
      categoryIds.set(c.slug, inserted.rows[0].id);
    }
  }

  const author = await pool.query("SELECT id FROM users WHERE role = 'admin' ORDER BY created_at LIMIT 1");
  const authorId = author.rows[0]?.id;

  const now = Date.now();
  let created = 0;
  for (const a of ARTICLES) {
    const categoryId = categoryIds.get(a.category);
    const publishedAt = new Date(now - a.publishedDaysAgo * 24 * 60 * 60 * 1000);
    const existing = await pool.query('SELECT id FROM articles WHERE slug = $1', [a.slug]);
    if (existing.rows.length > 0) {
      await pool.query(
        `UPDATE articles SET title = $1, excerpt = $2, content = $3, cover_image = $4,
               category_id = $5, author_id = $6, status = 'published', published_at = $7
         WHERE slug = $8`,
        [a.title, a.excerpt, JSON.stringify(buildContent(a.category, a.title)), a.cover,
         categoryId, authorId, publishedAt, a.slug]
      );
    } else {
      await pool.query(
        `INSERT INTO articles (title, slug, excerpt, content, cover_image, category_id, author_id, status, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'published', $8)`,
        [a.title, a.slug, a.excerpt, JSON.stringify(buildContent(a.category, a.title)), a.cover,
         categoryId, authorId, publishedAt]
      );
    }
    created += 1;
  }

  const counts = await pool.query(
    'SELECT (SELECT count(*) FROM categories) AS categories, (SELECT count(*) FROM articles) AS articles'
  );
  console.log(`Contenido de prueba listo: ${created} artículos procesados.`);
  console.log('Estado de la BD:', counts.rows[0]);
  await pool.end();
}

main().catch((error) => {
  console.error('Error sembrando contenido:', error.message);
  process.exit(1);
});