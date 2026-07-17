import { NextResponse } from "next/server";

export async function proxy(request) {
  const sessionToken = request.cookies.get("better-auth.session_token");

  // Check if user is trying to access dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!sessionToken) {
      // Redirect to sign in page if not logged in
      const signInUrl = new URL("/sinin", request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
};
