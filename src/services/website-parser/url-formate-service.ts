export const UrlFormateService = Symbol('UrlFormateService')

export interface UrlFormateService {
    getFullUrl(url: string, website?: string): string
    getDomain(url: string): string
}