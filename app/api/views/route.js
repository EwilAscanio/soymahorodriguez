import { getPool } from "../../../lib/db";

export async function POST(request) {
  let slug = "";
  try {
    const body = await request.json();
    if (typeof body?.slug === "string") slug = body.slug.trim();
  } catch {}

  if (!slug) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const found = await getPool().query("SELECT id FROM articles WHERE slug = $1", [slug]);
  if (found.rows.length === 0) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  await getPool().query("INSERT INTO article_views (article_id) VALUES ($1)", [
    found.rows[0].id,
  ]);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}