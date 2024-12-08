import { injectService } from "@/inversify.config";
import { QueryGenerateRssListParams } from "@/models/rss-generator-model";
import { RssGeneratorService } from "@/services/rss-generator-service";
import { UrlFormateService } from "@/services/url-formate-service";


export default function useMyFeeds() {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)

    function queryGenerateRssList(params: QueryGenerateRssListParams) {
        return rssGeneratorService.queryGenerateRssList(params)
    }

    const urlFormateService = injectService<UrlFormateService>(UrlFormateService)

    function getDomain(url: string) {
        return urlFormateService.getDomain(url)
    }

    return {
        queryGenerateRssList,
        getDomain
    }
}