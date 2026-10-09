import { NextResponse } from "next/server";
import { auth } from "./auth";

export const proxy = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = Boolean(req.auth);

  if (nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
    const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, nextUrl)
    );
  }

  if (nextUrl.pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};