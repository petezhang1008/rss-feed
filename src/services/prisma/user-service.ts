import { UserData } from "@/models/user-model"

export const UserService = Symbol('UserService')
export interface UserService {
    getUserByEmail: (email: string) => Promise<UserData | null>
createUser: (user: UserData) => Promise<UserData>
    updateUser: (userId: string, user: UserData) => Promise<UserData>
    deleteUser: (userId: string) => Promise<UserData>
}