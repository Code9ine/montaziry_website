import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(request) {
	request.headers.set("x-url", request.url);
	return i18nRouter(request, i18nConfig);
}

export const config = {
	// matcher: [
	//   // Skip all internal paths (_next)
	//   "/((?!_next).*)|/public",
	//   // Optional: only run on root (/) URL
	//   // '/'
	// ],
	matcher: ["/((?!api|static|.*\\..*|_next).*)", { source: "/" }],
};
