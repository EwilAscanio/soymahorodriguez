import { getPool } from "./db";

export async function listCategories() {
  const result = await getPool().query(
    "SELECT id, name, slug, description FROM categories ORDER BY name"
  );
  return result.rows;
}

export async function getCategoryBySlug(slug) {
  const result = await getPool().query(
    "SELECT id, name, slug, description FROM categories WHERE slug = $1",
    [slug]
  );
  return result.rows[0] || null;
}

function publishedWhere(category) {
  const clauses = ["a.status = 'published'"];
  const params = [];
  if (category) {
    params.push(category);
    clauses.push(`c.slug = $${params.length}`);
  }
  return { where: clauses.join(" AND "), params };
}

export async function listPublishedArticles({ category, page = 1, pageSize = 9 } = {}) {
  const { where, params } = publishedWhere(category);
  const offset = (page - 1) * pageSize;
  params.push(pageSize, offset);
  const limitIndex = params.length - 1;
  const offsetIndex = params.length;
  const result = await getPool().query(
    `SELECT a.id, a.title, a.slug, a.excerpt, a.cover_image, a.published_at,
            c.id AS category_id, c.name AS category_name, c.slug AS category_slug
     FROM articles a
     LEFT JOIN categories c ON c.id = a.category_id
     WHERE ${where}
     ORDER BY a.published_at DESC, a.created_at DESC
     LIMIT $${limitIndex} OFFSET $${offsetIndex}`,
    params
  );
  return result.rows;
}

export async function countPublishedArticles({ category } = {}) {
  const { where, params } = publishedWhere(category);
  const result = await getPool().query(
    `SELECT count(*)::int AS total
     FROM articles a
     LEFT JOIN categories c ON c.id = a.category_id
     WHERE ${where}`,
    params
  );
  return result.rows[0].total;
}

export async function getArticleBySlug(slug) {
  const result = await getPool().query(
    `SELECT a.id, a.title, a.slug, a.excerpt, a.content, a.cover_image,
            a.published_at, a.created_at,
            c.id AS category_id, c.name AS category_name, c.slug AS category_slug,
            u.name AS author_name,
            (SELECT count(*) FROM article_views v WHERE v.article_id = a.id)::int AS views
     FROM articles a
     LEFT JOIN categories c ON c.id = a.category_id
     LEFT JOIN users u ON u.id = a.author_id
     WHERE a.slug = $1 AND a.status = 'published'`,
    [slug]
  );
  return result.rows[0] || null;
}

export function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}