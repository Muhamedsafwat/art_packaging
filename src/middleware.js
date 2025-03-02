import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const locales = ["en", "ar"];
const defaultLocale = "ar";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export default function middleware(req) {
  console.log("Middleware activated for:", req.nextUrl.pathname);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/ar", req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
