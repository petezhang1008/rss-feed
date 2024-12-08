import { injectService } from "@/inversify.config"
import { GetFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/feed-service"

export default function useFeeds() {
    const feedService = injectService<FeedService>(FeedService)
    function getFeed(data: GetFeedParams) {
        return feedService.getFeed(data)
    }

    return {
        getFeed
    }
}