import type { NextAuthConfig } from 'next-auth';
import { RouterName } from './enums/router';
const NOT_AUTH_PATHS = [RouterName.LOGIN, RouterName.REGISTER, RouterName.HOME, RouterName.RSS_BUILDER]

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    trustHost: true,
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const notNeedLogin = NOT_AUTH_PATHS.findIndex(path => {
                return nextUrl.pathname === path
            }) !== -1;
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