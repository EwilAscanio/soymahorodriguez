import { NextResponse } from "next/server";
import { getPool } from "../../../../lib/db.js";
import { readString, slugify, requireAdmin } from "../../../../lib/admin-input.js";

async function parseBody(req) {
  try {
    return await req.json();
  } catch {
    return null;
  }
}

export async function POST(req) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "No autorizado." }, { status: 401 });

  const body = await parseBody(req);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const name = readString(body.name, 120);
  if (!name) {
    return NextResponse.json({ error: "El nombre de la categoría es obligatorio." }, { status: 400 });
  }
  const slug = readString(body.slug, 120) || slugify(name);
  const description = readString(body.description, 500) || null;

  const existing = await getPool().query("SELECT 1 FROM categories WHERE slug = $1", [slug]);
  if (existing.rows.length > 0) {
    return NextResponse.json({ error: "Ya existe una categoría con ese slug." }, { status: 400 });
  }

  const inserted = await getPool().query(
    "INSERT INTO categories (name, slug, description) VALUES ($1, $2, $3) RETURNING id",
    [name, slug, description]
  );
  return NextResponse.json({ id: inserted.rows[0].id }, { status: 201 });
}

export async function DELETE(req) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "No autorizado." }, { status: 401 });

  const body = await parseBody(req);
  const id = Number(body?.id);
  if (Number.isInteger(id) && id > 0) {
    await getPool().query("DELETE FROM categories WHERE id = $1", [id]);
  }
  return NextResponse.json({ ok: true });
}