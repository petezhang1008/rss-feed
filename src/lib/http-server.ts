import { NextResponse } from 'next/server';
import { ErrorCode } from '@/enums/error-code';
import { ERROR_MSG_MAP } from '@/constants/error-msg';

export function sendResponse<T>(data: T, option?: ResponseInit): NextResponse<T> {
    return new NextResponse<T>(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        ...option
    });
}

export function sendJsonResponse<T>(data: T, option?: ResponseInit): NextResponse<T> {
    return new NextResponse<T>(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        ...option
    });
}

export function sendError<T>(
    statusCode: number,
    errorCode: ErrorCode,
    errorData?: Record<string, unknown>,
    option?: ResponseInit
): NextResponse<T> {
    const _errorData = {
        ..._getErrorMessage(errorCode),
        ...errorData
    };
    return new NextResponse<T>(JSON.stringify(_errorData), {
        status: statusCode,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        ...option
    });
}

function _getErrorMessage(errorCode: ErrorCode): ErrorData {
    return {
        errorCode: errorCode,
        message: ERROR_MSG_MAP[errorCode]
    }
}

export interface ErrorData {
    errorCode: ErrorCode;
    message: string;
}

export type ResponseType<T> = Promise<NextResponse<T | ErrorData>>