import { inject, injectable } from "inversify"
import { LoginService } from "../auth/login-service"
import bcrypt from 'bcrypt'
import { UserModel } from "@/models/user-model"

@injectable()
export class LoginServiceImpl implements LoginService {
    constructor(
        @inject(UserModel)
        private _userModel: UserModel
    ) { }
    async login(email: string, password: string) {
        const currentUser = await this._userModel.getUserByEmailWithPassword(email)
        if (!currentUser) {
            throw new Error('User not found')
        }
        const isPasswordMatch = await bcrypt.compare(password, currentUser.password)
        if (!isPasswordMatch) {
            throw new Error('Invalid password')
        }
        return currentUser
    }
}