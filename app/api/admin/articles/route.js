import { NextResponse } from "next/server";
import { getPool } from "../../../../lib/db.js";
import {
  readString,
  slugify,
  parseContent,
  parseOptionalId,
  parseOptionalStatus,
  uniqueSlug,
  requireAdmin,
} from "../../../../lib/admin-input.js";

export async function POST(req) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "No autorizado." }, { status: 401 });

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
  const slug = await uniqueSlug(requestedSlug || slugify(title));
  const categoryId = parseOptionalId(body.category_id);
  const coverImage = readString(body.cover_image, 2000) || null;
  const excerpt = readString(body.excerpt, 500) || null;
  const publishedAt = status === "published" ? new Date() : null;

  const inserted = await getPool().query(
    `INSERT INTO articles (title, slug, excerpt, content, cover_image, status, category_id, author_id, published_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING id`,
    [title, slug, excerpt, content, coverImage, status, categoryId, user.id, publishedAt]
  );

  return NextResponse.json({ id: inserted.rows[0].id }, { status: 201 });
}