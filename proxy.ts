import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  
  // Simple A/B testing bucket assignment
  if (!request.cookies.has('ab_bucket')) {
    const bucket = Math.random() < 0.5 ? 'A' : 'B';
    response.cookies.set('ab_bucket', bucket, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  // Example: Redirect old blog paths if needed
  if (request.nextUrl.pathname.startsWith('/blog/') && request.nextUrl.pathname.endsWith('.html')) {
    const newPath = request.nextUrl.pathname.replace('.html', '');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
