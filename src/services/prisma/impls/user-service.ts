import { UserData, UserModel } from "@/models/user-model"
import { injectable, inject } from "inversify"
import { UserService } from "../user-service"
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

@injectable()
export class UserServiceImpl implements UserService {
    constructor(
        @inject(UserModel)
        private _userModel: UserModel
    ) { }

    getUserByEmail(email: string) {
        return this._userModel.getUserByEmail(email)
    }
    async createUser(user: UserData) {
        const isUserExist = await this.getUserByEmail(user.email)
        if (isUserExist) {
            throw new Error('User already exists')
        }
        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS)
        return this._userModel.createUser({ ...user, password: hashedPassword })
    }
    updateUser(userId: string, user: UserData) {
        return this._userModel.updateUser({ ...user, id: userId })
    }
    deleteUser(userId: string) {
        return this._userModel.deleteUser(userId)
    }
}