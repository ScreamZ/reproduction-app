import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Log the cookies
  console.log("Cookies in the response:", response.cookies.getAll());

  return response;
}

export const config = {
  matcher: "/:path*",
};
