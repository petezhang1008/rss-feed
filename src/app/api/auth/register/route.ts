import { sendJsonResponse } from "@/lib/http-server"
import { UserData } from "@/models/user-model"
import { ResponseType } from '@/lib/http-server';
import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { UserService } from "@/services/user-service";

export async function POST(req: NextRequest): ResponseType<UserData> {
    const userService = injectService<UserService>(UserService)
    const data: UserData = await req.json()
    const result = await userService?.createUser(data)
    return sendJsonResponse<UserData>(result)
}