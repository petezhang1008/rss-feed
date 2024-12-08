import { PrismaClient, User } from "@prisma/client"
import { UserData, UserModel } from "../user-model"
import { injectable, inject } from "inversify"
import { PrismaSymbol } from "@/lib/prisma";

@injectable()
export class UserModelImpl implements UserModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async getUserById(userId: string) {
        return this._prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }
    async getUserByEmail(email: string) {
        return this._prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }
    async createUser(user: UserData) {
        return this._prisma.user.create({
            data: user
        }).then(user => user.id)
    }
    async updateUser(user: UserData) {
        return this._prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        })
    }
    async deleteUser(userId: string) {
        return this._prisma.user.delete({
            where: {
                id: userId
            }
        })
    }
}