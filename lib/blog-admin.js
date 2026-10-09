import { getPool } from "./db.js";

export async function getAdminStats() {
  const result = await getPool().query(
    `SELECT
       (SELECT count(*) FROM articles)::int AS total_articles,
       (SELECT count(*) FROM articles WHERE status = 'published')::int AS published,
       (SELECT count(*) FROM articles WHERE status = 'draft')::int AS drafts,
       (SELECT count(*)::int FROM article_views) AS total_views,
       (SELECT count(*) FROM categories)::int AS total_categories`
  );
  return result.rows[0];
}

export async function getViewsLastDays(days = 14) {
  const result = await getPool().query(
    `SELECT date_trunc('day', viewed_at)::date AS day, count(*)::int AS views
     FROM article_views
     WHERE viewed_at >= now() - ($1::int - 1) * interval '1 day'
     GROUP BY day
     ORDER BY day`,
    [days]
  );
  const map = new Map(result.rows.map((r) => [r.day.toISOString().slice(0, 10), r.views]));
  const out = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - i);
    const key = date.toISOString().slice(0, 10);
    out.push({ day: key, visits: map.get(key) || 0 });
  }
  return out;
}

export async function getArticlesByMonth(months = 6) {
  const result = await getPool().query(
    `SELECT date_trunc('month', published_at)::date AS month, count(*)::int AS total
     FROM articles
     WHERE status = 'published' AND published_at >= date_trunc('month', now()) - ($1::int - 1) * interval '1 month'
     GROUP BY month
     ORDER BY month`,
    [months]
  );
  const map = new Map(result.rows.map((r) => [r.month.toISOString().slice(0, 7), r.total]));
  const out = [];
  const now = new Date();
  for (let i = months - 1; i >= 0; i--) {
    const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = month.toISOString().slice(0, 7);
    const label = month.toLocaleDateString("es-ES", { month: "short", year: "2-digit" });
    out.push({ month: label, articles: map.get(key) || 0 });
  }
  return out;
}

export async function listAllArticles() {
  const result = await getPool().query(
    `SELECT a.id, a.title, a.slug, a.status, a.published_at, a.created_at,
            c.name AS category_name,
            (SELECT count(*) FROM article_views v WHERE v.article_id = a.id)::int AS views
     FROM articles a
     LEFT JOIN categories c ON c.id = a.category_id
     ORDER BY a.updated_at DESC, a.created_at DESC`
  );
  return result.rows;
}

export async function getArticleById(id) {
  const result = await getPool().query(
    `SELECT a.id, a.title, a.slug, a.excerpt, a.content, a.cover_image, a.status,
            a.category_id, a.published_at,
            c.name AS category_name
     FROM articles a
     LEFT JOIN categories c ON c.id = a.category_id
     WHERE a.id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

export async function listCategoriesAdmin() {
  const result = await getPool().query(
    `SELECT c.id, c.name, c.slug, c.description,
            (SELECT count(*) FROM articles a WHERE a.category_id = c.id)::int AS articles
     FROM categories c
     ORDER BY c.name`
  );
  return result.rows;
}