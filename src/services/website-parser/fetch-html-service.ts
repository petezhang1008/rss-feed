export const FetchHtmlService = Symbol.for('FetchHtmlService')


export interface FetchHtmlService {
    fetchHtml(url: string): Promise<string>
    fetchAndEncodeHtml(url: string): Promise<string>
}
