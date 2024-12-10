'use server'
import { signIn, signOut } from "@/auth"

export const loginAction = async (email: string, password: string) => {
    const res = await signIn('credentials', {
        email,
        password,
    })
    return res
}

export const logoutAction = async () => {
    await signOut()
}