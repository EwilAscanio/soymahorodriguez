import { NextResponse } from "next/server";
import { getPool } from "../../../../../../lib/db.js";
import { isUuid, parseOptionalStatus, requireAdmin } from "../../../../../../lib/admin-input.js";

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
  const status = parseOptionalStatus(body?.status);

  if (status === "published") {
    await getPool().query(
      `UPDATE articles
       SET status = 'published',
           published_at = COALESCE(published_at, now()),
           updated_at = now()
       WHERE id = $1`,
      [id]
    );
  } else {
    await getPool().query(
      "UPDATE articles SET status = 'draft', updated_at = now() WHERE id = $1",
      [id]
    );
  }
  return NextResponse.json({ ok: true });
}