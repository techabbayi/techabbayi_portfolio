import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;

        // Check if user is admin
        if (token?.role !== 'admin') {
            return NextResponse.redirect(new URL('/admin/login', req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ['/admin/dashboard/:path*', '/admin/projects/:path*', '/admin/certificates/:path*', '/admin/writings/:path*', '/admin/profile/:path*'],
};
