import { ErrorCode } from "@/enums/error-code";

export const ERROR_MSG_MAP: Record<string, string> = {
    [ErrorCode.NO_USER]: 'No user found',
    [ErrorCode.NOT_FOUND]: 'No data found',
    [ErrorCode.INTERNAL_ERROR] : 'Internal server error'
}