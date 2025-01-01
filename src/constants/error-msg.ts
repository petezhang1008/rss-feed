import { ErrorCode } from "@/enums/error-code";

export const ERROR_MSG_MAP: Record<string, string> = {
    [ErrorCode.NO_USER]: 'No user found',
    [ErrorCode.NOT_FOUND]: 'No data found',
    [ErrorCode.INTERNAL_ERROR]: 'Internal server error',
    [ErrorCode.BAD_REQUEST]: 'Bad request',
    [ErrorCode.INVALID_PARAMS]: 'Invalid params',
    [ErrorCode.NO_TASK]: 'No task found',
    [ErrorCode.NO_RSS]: 'No rss found',
    [ErrorCode.NO_FEED]: 'No feed found',
    [ErrorCode.NO_USER_RSS]: 'No user rss found',
    [ErrorCode.NO_CATEGORY]: 'No category found',
    [ErrorCode.NO_BUNDLE]: 'No bundle found',
}
