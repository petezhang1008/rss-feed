import type { NextAuthConfig } from 'next-auth';
import { RouterName } from './enums/router';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    trustHost: true,
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const needLogin = nextUrl.pathname.includes('/management')
            const inLoginPage = nextUrl.pathname === RouterName.LOGIN

            if (!isLoggedIn && needLogin) {
                return Response.redirect(new URL(RouterName.LOGIN, nextUrl));
            } else if (isLoggedIn && inLoginPage) {
                return Response.redirect(new URL(RouterName.MANAGEMENT_HOME, nextUrl));
            } else {
                return true;
            }
        },
        session({ session, token }) {
            session.user.id = token.sub as string;
            return session;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;