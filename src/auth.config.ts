import _ from 'lodash';
import type { NextAuthConfig } from 'next-auth';
const NOT_AUTH_PATHS = ['/login', '/register']

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    trustHost: true,
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const notNeedLogin = _.includes(NOT_AUTH_PATHS, nextUrl.pathname);
            if (notNeedLogin) {
                return true; // Redirect unauthenticated users to login page
            } else if (isLoggedIn && notNeedLogin) {
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