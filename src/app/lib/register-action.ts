import { httpClient } from "@/lib/http-client"


export const registerAction = async (email: string, password: string) => {
    return httpClient.post('/auth/register', {
        email,
        password
    })
}