import { injectService } from "@/inversify.config"
import { RssService } from "@/services/rss-service"

export const useRssDetail = () => {
    const rssService = injectService<RssService>(RssService)

    function getRssDetail(id: string) {
        const rss = rssService.getRssDetail(id)
        return rss
    }

    return {
        getRssDetail
    }
}