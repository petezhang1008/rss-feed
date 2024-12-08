import { User } from "@prisma/client"

export const UserModel = Symbol.for('UserModel')

export interface UserModel {
    getUserById: (userId: string) => Promise<User | null>
    getUserByEmail: (email: string) => Promise<User | null>
    createUser: (user: UserData) => Promise<string>
    updateUser: (user: UserData) => Promise<User>
    deleteUser: (userId: string) => Promise<User>
}

export type UserData = Pick<User, 'email' | 'password'> & Partial<Omit<User, 'email' | 'password'>>