import { UserData } from "@/models/user-model"
import { User } from "@prisma/client"


export const LoginService = Symbol('LoginService')
export interface LoginService {
    login: (email: string, password: string) => Promise<UserData>
}