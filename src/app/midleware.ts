import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // Check if the user is visiting the root path "/"
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/ar", req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"], // Ensure it matches the root and localized paths
};
