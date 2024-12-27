import { sendJsonResponse } from "@/lib/http-server"
import { UserData } from "@/models/user-model"
import { ResponseType } from '@/lib/http-server';
import { NextRequest } from "next/server";
import { injectService } from "@/inversify.config";
import { LoginService } from "@/services/login-service";

export async function POST(req: NextRequest): ResponseType<UserData> {
    const loginService = injectService<LoginService>(LoginService)
    const data: UserData = await req.json()
    const result = await loginService.login(data.email, data.password)
    return sendJsonResponse<UserData>(result)
}