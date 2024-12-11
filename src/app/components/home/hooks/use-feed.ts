import { auth } from "@/auth"
import { injectService } from "@/inversify.config"
import { FeedService } from "@/services/feed-service"

export const useFeed = () => {

    const feedService = injectService<FeedService>(FeedService)
    async function getFeeds(bundleId?: string) {
        const session = await auth()
        if (!bundleId) {
            return feedService.queryUserFeed({
                page: 1,
                pageSize: 10,
                userId: session?.user?.id!
            })
        } else {
            return feedService.getBundleFeed({
                bundleId,
                page: 1,
                pageSize: 10
            })
        }
    }

    return {
        getFeeds
    }
}