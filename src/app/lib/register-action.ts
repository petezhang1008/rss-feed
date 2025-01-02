import { httpClient } from "@/lib/http-client"
import { UserData } from "@/models/user-model"


export const registerAction = async (email: string, password: string) => {
    return httpClient.post<UserData>('/auth/register', {
        email,
        password
    }).then(res => res.data)
}