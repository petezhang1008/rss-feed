import { PrismaClient, User } from "@prisma/client"
import { UserData, UserModel } from "../user-model"
import { injectable, inject } from "inversify"
import { PrismaSymbol } from "@/lib/prisma";
import _ from "lodash";

@injectable()
export class UserModelImpl implements UserModel {
    constructor(
        @inject(PrismaSymbol) private _prisma: PrismaClient
    ) { }

    private _pickUserData(user: User | null) {
        return user ? _.pick(user, ['id', 'email', 'name']) as UserData : null
    }

    async getUserById(userId: string) {
        return this._prisma.user.findUnique({
            where: {
                id: userId
            }
        }).then(user => this._pickUserData(user))
    }
    async getUserByEmail(email: string) {
        return this._prisma.user.findUnique({
            where: {
                email: email
            }
        }).then(user => this._pickUserData(user))
    }
    async getUserByEmailWithPassword(email: string) {
        return this._prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }
    async createUser(user: UserData) {
        return this._prisma.user.create({
            data: user
        }).then(user => this._pickUserData(user)!)
    }
    async updateUser(user: UserData) {
        return this._prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        }).then(user => this._pickUserData(user)!)
    }
    async deleteUser(userId: string) {
        return this._prisma.user.delete({
            where: {
                id: userId
            }
        }).then(user => this._pickUserData(user)!)
    }
}