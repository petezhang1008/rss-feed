import { sendError, sendJsonResponse } from "@/lib/http-server"
import { UserData } from "@/models/user-model"
import { ResponseType } from '@/lib/http-server';
import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { UserService } from "@/services/prisma/user-service";
import { ErrorCode } from "@/enums/error-code";

export async function POST(req: NextRequest): ResponseType<UserData> {
    const userService = injectService<UserService>(UserService)
    const data: UserData = await req.json()
    if (!data.email || !data.password) {
        return sendError<UserData>(400, ErrorCode.BAD_REQUEST, { message: 'Email and password are required' })
    }
    try {
        const result = await userService?.createUser(data)
        return sendJsonResponse<UserData>(result)
    } catch (error) {
        return sendError<UserData>(500, ErrorCode.INTERNAL_ERROR, { error })
    }
}