export interface Pagination<T> {
    page: number,
    pageSize: number,
    total: number
    result: T
}

export interface PaginationParams {
    page: number
    pageSize: number
}