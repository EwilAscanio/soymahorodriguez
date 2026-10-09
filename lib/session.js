import { redirect } from "next/navigation";
import { connection } from "next/server";
import { auth } from "../auth.js";
import { getPool } from "./db.js";

export async function getCurrentUser() {
  await connection();
  const session = await auth();
  const id = session?.user?.id;
  if (!id) return null;

  const result = await getPool().query(
    "SELECT id, email, name, role, created_at FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}