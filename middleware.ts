import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/index"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    const response = NextResponse.next();
    if (user === "admin" && pwd === "admin") {
      response.cookies.set("log", "admin");
      return response;
    } else if (user === "user" && pwd === "user") {
      response.cookies.set("log", "user");
      return response;
    } else response.cookies.set("log", "");
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
