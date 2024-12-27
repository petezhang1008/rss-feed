export const DEFAULT_JOB_OPTIONS = {
    // attempts: 5, // 设置重试次数
    // backoff: 1000, // 设置重试间隔（毫秒）
    timeout: 60000, // 设置任务超时时间（毫秒）
    removeOnComplete: true, // 完成后自动删除
    removeOnFail: true, // 失败后自动删除
}