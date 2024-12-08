import { UserData } from "@/models/user-model"
import { User } from "@prisma/client"

export const UserService = Symbol('UserService')
export interface UserService {
    getUserByEmail: (email: string) => Promise<User | null>
    createUser: (user: UserData) => Promise<string>
    updateUser: (userId: string, user: UserData) => Promise<User>
    deleteUser: (userId: string) => Promise<User>
}