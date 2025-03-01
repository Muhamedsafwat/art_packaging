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

  // If the user visits "/", redirect to "/ar"
  if (req.nextUrl.pathname === "/") {
    console.log("Redirecting to /ar");
    return NextResponse.redirect(new URL("/ar", req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
