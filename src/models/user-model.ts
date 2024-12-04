import { User } from "@prisma/client"


export const UserModel = Symbol.for('UserModel')

export interface UserModel {
    getUser: (userId: string) => Promise<User | null>
    createUser: (user: User) => Promise<User>
    updateUser: (user: User) => Promise<User>
    deleteUser: (userId: string) => Promise<User>
}