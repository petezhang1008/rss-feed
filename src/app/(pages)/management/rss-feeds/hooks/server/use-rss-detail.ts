import { injectService } from "@/inversify.config"
import { BundleService } from "@/services/bundle-service"
import { RssService } from "@/services/rss-service"

export default function useRssDetail() {
    const rssGeneratorService = injectService<RssService>(RssService)
    const bundleService = injectService<BundleService>(BundleService)
    function getRssDetail(id: string) {
        return rssGeneratorService.getRss(id)
    }

    function getBundleFeed(id: string) {
        return bundleService.getBundleById(id)
    }
    return {
        getRssDetail,
        getBundleFeed
    }
}