import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { injectService } from './inversify.config';
import { LoginService } from './services/auth/login-service';
import { z } from 'zod';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const loginService = injectService<LoginService>(LoginService)
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await loginService.login(email, password)
                    if (!user) return null;
                    return user;
                }

                return null;
            },
        }),
    ],
});