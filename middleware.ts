import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogged =
    request.cookies.get("admin")?.value === "true";

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    request.nextUrl.pathname !== "/admin/login"
  ) {
    if (!isLogged) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};