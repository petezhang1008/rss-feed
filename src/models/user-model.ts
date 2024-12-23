import { User } from "@/types/model"

export const UserModel = Symbol.for('UserModel')

export interface UserModel {
    getUserById: (userId: string) => Promise<UserData | null>
    getUserByEmail: (email: string) => Promise<UserData | null>
    getUserByEmailWithPassword: (email: string) => Promise<UserData | null>
    createUser: (user: UserData) => Promise<UserData>
    updateUser: (user: UserData) => Promise<UserData>
    deleteUser: (userId: string) => Promise<UserData>
}

export type UserData = Pick<User, 'email' | 'password'> & Partial<Omit<User, 'email' | 'password'>>