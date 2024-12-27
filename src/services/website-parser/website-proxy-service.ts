export const WebsiteProxyService = Symbol('WebsiteProxyService')

export interface WebsiteProxyService {
    getProxyHtml(url: string): Promise<string>
}