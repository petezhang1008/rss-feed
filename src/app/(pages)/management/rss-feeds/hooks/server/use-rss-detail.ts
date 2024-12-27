import { injectService } from "@/inversify.config"
import { BundleService } from "@/services/prisma/bundle-service"
import { UserRssService } from "@/services/prisma/user-rss-service"

export default function useRssDetail() {
    const userRssService = injectService<UserRssService>(UserRssService)
    const bundleService = injectService<BundleService>(BundleService)
    function getRssDetail(id: string) {
        return userRssService.getRssDetail(id)
    }

    function getBundleFeed(id: string) {
        return bundleService.getBundleById(id)
    }
    return {
        getRssDetail,
        getBundleFeed
    }
}