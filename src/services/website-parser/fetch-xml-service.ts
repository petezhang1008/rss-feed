export const FetchXmlService = Symbol.for('FetchXmlService')

export interface FetchXmlService {
    fetchXml(url: string): Promise<string>
}