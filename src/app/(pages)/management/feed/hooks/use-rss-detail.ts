import { injectService } from "@/inversify.config"
import { RssGeneratorService } from "@/services/rss-generator-service"

export default function useRssDetail() {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
    function getRssDetail(id: string) {
        return rssGeneratorService.getGenerateRss(id)
    }
    return {
        getRssDetail
    }
}