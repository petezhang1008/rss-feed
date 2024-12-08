import { User } from "@prisma/client"
import { inject, injectable } from "inversify"
import { LoginService } from "../login-service"
import { UserService } from "../user-service"
import bcrypt from 'bcrypt'

@injectable()
export class LoginServiceImpl implements LoginService {
    constructor(
        @inject(UserService)
        private _userService: UserService
    ) { }
    async login(email: string, password: string) {
        const currentUser = await this._userService.getUserByEmail(email)
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