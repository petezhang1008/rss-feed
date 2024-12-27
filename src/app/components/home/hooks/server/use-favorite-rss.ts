import { injectService } from "@/inversify.config"
import { RssService } from "@/services/prisma/rss-service"

export const useFavoriteRss = () => {
    const rssService = injectService<RssService>(RssService)
    function getFavoriteRssList() {
        return rssService.getFavoriteRssList(5)
    }
    return {
        getFavoriteRssList
    }
}