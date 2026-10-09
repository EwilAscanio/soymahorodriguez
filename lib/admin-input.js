import { getPool } from "./db.js";
import { getCurrentUser } from "./session.js";

export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user) return null;
  if (user.role !== "admin") return null;
  return user;
}

export function readString(value, maxLength = null) {
  let text = typeof value === "string" ? value.trim() : "";
  if (maxLength && text.length > maxLength) text = text.slice(0, maxLength);
  return text;
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

export function parseContent(raw) {
  let content = raw;
  if (typeof content === "string") {
    try {
      content = JSON.parse(content);
    } catch {
      return null;
    }
  }
  if (
    !content ||
    typeof content !== "object" ||
    content.type !== "doc" ||
    !Array.isArray(content.content)
  ) {
    return null;
  }
  return content;
}

export async function uniqueSlug(slug) {
  const base = slug || "articulo";
  const existing = await getPool().query("SELECT 1 FROM articles WHERE slug = $1", [base]);
  if (existing.rows.length === 0) return base;
  for (let i = 2; i < 1000; i++) {
    const candidate = `${base}-${i}`;
    const found = await getPool().query("SELECT 1 FROM articles WHERE slug = $1", [candidate]);
    if (found.rows.length === 0) return candidate;
  }
  return `${base}-${Date.now()}`;
}

export function parseOptionalId(value) {
  if (typeof value === "number" && Number.isInteger(value) && value > 0) return value;
  if (typeof value === "string" && /^\d+$/.test(value.trim())) return Number(value.trim());
  return null;
}

export function isUuid(value) {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

export function parseOptionalStatus(value) {
  return value === "published" ? "published" : "draft";
}