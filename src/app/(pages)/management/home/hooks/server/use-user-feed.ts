import { injectService } from "@/inversify.config"
import { FeedService } from "@/services/feed-service"

export function useUserFeed() {
    const feedService = injectService<FeedService>(FeedService)
    async function getUserFeeds(userId: string) {
        const res = await feedService.queryUserFeed({
            page: 1,
            pageSize: 50,
            userId
        })
        return res
    }

    return {
        getUserFeeds
    }
}