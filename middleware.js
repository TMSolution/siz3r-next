import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next();
  const requestCookies = request.cookies;

  let cookieLang = requestCookies.get("lang");
  if (cookieLang && cookieLang.value) {
    response.cookies.set("lang", cookieLang.value);
    return response;
  } else {
    const requestHeaders = new Headers(request.headers);
    let lang = requestHeaders.get("accept-language").substring(0, 2);
    response.cookies.set("lang", lang);
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
