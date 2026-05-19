import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "alphabullacademy.com";
const VERCEL_PREVIEW_HOST = "alpha-bull-academy.vercel.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  if (
    host === "www.alphabullacademy.com" ||
    host === "alphabull.club" ||
    host === "www.alphabull.club" ||
    host === VERCEL_PREVIEW_HOST
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
