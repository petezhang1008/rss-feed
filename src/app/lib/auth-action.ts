'use server'
import { signIn } from "@/auth"

export const loginAction = async (email: string, password: string) => {
    const res = await signIn('credentials', {
        email,
        password,
    })
    return res
}