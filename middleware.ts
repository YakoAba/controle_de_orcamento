import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')
    const response = NextResponse.next();
    response.cookies.set('log', '');
    if (user === 'admin' && pwd === 'admin') {
      response.cookies.set('log', 'admin');
      return response
    }
    if (user === 'user' && pwd === 'user') {
      response.cookies.set('log', 'user');
      return response
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
