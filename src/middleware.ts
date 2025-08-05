import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing.ts";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
