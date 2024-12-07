import { NextResponse } from "next/server";
import { ErrorCode } from "@/enums/error-code";

export const HttpServer = Symbol.for("HttpServer");

export interface HttpServer {
    sendResponse<T>(data: T, option?: ResponseInit): NextResponse<T>;
    sendError<T>(statusCode: number, errorCode: ErrorCode, errorData?: Record<string, unknown>, option?: ResponseInit): NextResponse<T>;
}

export interface ErrorData {
    errorCode: ErrorCode;
    message: string;
}


export type ResponseType<T> = Promise<NextResponse<T | ErrorData>>