import { NextResponse } from 'next/server';
import { ErrorData, HttpServer } from './http-server.interface';
import { ErrorCode } from '@/enums/error-code';
import { ERROR_MSG_MAP } from '@/constants/error-msg';
import { injectable } from 'inversify';

@injectable()
export class HttpServerImpl implements HttpServer {
    constructor() {
    }

    sendResponse<T>(data: T, option: ResponseInit): NextResponse<T> {
        return new NextResponse<T>(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            ...option
        });
    }

    sendError<T>(statusCode: number, errorCode: ErrorCode, errorData?: Record<string, unknown>, option?: ResponseInit): NextResponse<T> {
        const _errorData = {
            ...this._getErrorMessage(errorCode),
            ...errorData
        };
        return new NextResponse<T>(JSON.stringify(_errorData), {
            status: statusCode,
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            ...option
        });
    }

    private _getErrorMessage(errorCode: ErrorCode): ErrorData {
        return {
            errorCode: errorCode,
            message: ERROR_MSG_MAP[errorCode]
        }
    }
}