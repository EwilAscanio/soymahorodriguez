import { NextResponse } from "next/server";
import { auth } from "../../../../auth.js";

export async function POST() {
  await auth().signOut({ redirect: false });
  return NextResponse.json({ ok: true });
}