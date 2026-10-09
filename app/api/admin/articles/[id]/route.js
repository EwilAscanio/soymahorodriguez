import { NextResponse } from "next/server";
import { getPool } from "../../../../../lib/db.js";
import {
  readString,
  slugify,
  parseContent,
  parseOptionalId,
  parseOptionalStatus,
  uniqueSlug,
  isUuid,
  requireAdmin,
} from "../../../../../lib/admin-input.js";

export async function PATCH(req, { params }) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "No autorizado." }, { status: 401 });

  const { id } = await params;
  if (!isUuid(id)) {
    return NextResponse.json({ error: "Artículo inválido." }, { status: 400 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const title = readString(body.title, 255);
  if (!title) {
    return NextResponse.json({ error: "El título es obligatorio." }, { status: 400 });
  }

  const content = parseContent(body.content);
  if (!content) {
    return NextResponse.json({ error: "El contenido del artículo no es válido." }, { status: 400 });
  }

  const status = parseOptionalStatus(readString(body.status, 20));
  const requestedSlug = readString(body.slug, 255);
  const categoryId = parseOptionalId(body.category_id);
  const coverImage = readString(body.cover_image, 2000) || null;
  const excerpt = readString(body.excerpt, 500) || null;

  const current = await getPool().query("SELECT published_at, status FROM articles WHERE id = $1", [id]);
  if (current.rows.length === 0) {
    return NextResponse.json({ error: "El artículo no existe." }, { status: 404 });
  }

  let slug = requestedSlug || (slugify(title) || "articulo");
  const dup = await getPool().query(
    "SELECT EXISTS(SELECT 1 FROM articles WHERE slug = $1 AND id <> $2) AS used",
    [slug, id]
  );
  if (dup.rows[0].used) {
    slug = await uniqueSlug(slug);
  }

  const wasPublished = current.rows[0].status === "published";
  const publishedAt =
    status === "published"
      ? current.rows[0].published_at || new Date()
      : wasPublished
        ? current.rows[0].published_at
        : null;

  await getPool().query(
    `UPDATE articles
     SET title = $1, slug = $2, excerpt = $3, content = $4, cover_image = $5,
         status = $6, category_id = $7, published_at = $8, updated_at = now()
     WHERE id = $9`,
    [title, slug, excerpt, content, coverImage, status, categoryId, publishedAt, id]
  );

  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "No autorizado." }, { status: 401 });

  const { id } = await params;
  if (isUuid(id)) {
    await getPool().query("DELETE FROM articles WHERE id = $1", [id]);
  }
  return NextResponse.json({ ok: true });
}