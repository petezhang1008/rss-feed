import { UserData } from "@/models/user-model"


export const LoginService = Symbol('LoginService')
export interface LoginService {
    login: (email: string, password: string) => Promise<UserData>
}