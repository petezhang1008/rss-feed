import { injectService } from "@/inversify.config"
import { BundleService } from "@/services/bundle-service"
import { RssGeneratorService } from "@/services/rss-generator-service"

export default function useRssDetail() {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
    const bundleService = injectService<BundleService>(BundleService)
    function getRssDetail(id: string) {
        return rssGeneratorService.getGenerateRss(id)
    }

    function getBundleFeed(id: string) {
        return bundleService.getBundleById(id)
    }
    return {
        getRssDetail,
        getBundleFeed
    }
}