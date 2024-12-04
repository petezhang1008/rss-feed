import { PrismaClient, User } from "@prisma/client"
import { UserModel } from "../user-model"
import { injectable, inject } from "inversify"
import { PrismaSymbol } from "@/lib/prisma";

@injectable()
export class UserModelImpl implements UserModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }
    async getUser(userId: string) {
        return this._prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }
    async createUser(user: User) {
        return this._prisma.user.create({
            data: user
        })
    }
    async updateUser(user: User) {
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