import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const { pathname } = req.nextUrl;

  // Pages that should be public (accessible without login)
  const publicPaths = ["/user/signin", "/user/signup"];

  if (!token) {
    if (!publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/user/signin", req.url));
    }
  } else {
    if (publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
  ],
};
