import { httpClient } from "@/lib/http-client"


export const registerAction = async (email: string, password: string) => {
    return httpClient.post('/user/register', {
        email,
        password
    })
}