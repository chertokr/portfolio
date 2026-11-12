import { next } from '@vercel/edge'

/**
 * Password protects the whole site with HTTP Basic auth.
 *
 * The password is NEVER stored in this repo. It comes from a Vercel
 * environment variable:
 *
 *   Vercel -> Project -> Settings -> Environment Variables
 *     SITE_PASSWORD = whatever you choose     (Production + Preview)
 *     SITE_USER     = optional, defaults to "rachel"
 *
 * If SITE_PASSWORD is not set, the site stays public, so adding this file
 * alone changes nothing until you set the variable. To unlock the site
 * later, delete the variable (or delete this file) and redeploy.
 */

export const config = {
  // every path, including assets and the resume PDF
  matcher: '/:path*',
}

export default function middleware(request) {
  const expected = process.env.SITE_PASSWORD
  if (!expected) return next()

  const user = process.env.SITE_USER || 'rachel'
  const header = request.headers.get('authorization') || ''
  const [scheme, encoded] = header.split(' ')

  if (scheme === 'Basic' && encoded) {
    let decoded = ''
    try {
      decoded = atob(encoded)
    } catch {
      decoded = ''
    }
    const separator = decoded.indexOf(':')
    if (separator !== -1) {
      const givenUser = decoded.slice(0, separator)
      const givenPass = decoded.slice(separator + 1)
      if (givenUser === user && givenPass === expected) return next()
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Rachel Chertok", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      // never let a browser or CDN cache the challenge or a protected page
      'Cache-Control': 'no-store',
    },
  })
}
