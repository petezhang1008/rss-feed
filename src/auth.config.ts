import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    trustHost: true,
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnLogin = nextUrl.pathname.startsWith('/login');
            if (isOnLogin) {
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn && isOnLogin) {
                return Response.redirect(new URL('/', nextUrl));
            } else if (!isLoggedIn) {
                return Response.redirect(new URL('/login', nextUrl));
            }
            return true;
        },
        session({ session, token }) {
            session.user.id = token.sub as string;
            return session;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;