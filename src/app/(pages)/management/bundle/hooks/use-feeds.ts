import { injectService } from "@/inversify.config"
import { GetBatchFeedParams, GetBundleFeedParams, GetFeedParams } from "@/models/feed-model"
import { FeedService } from "@/services/feed-service"

export default function useFeeds() {
    const feedService = injectService<FeedService>(FeedService)
    function getBundleFeed(data: GetBundleFeedParams) {
        return feedService.getBundleFeed(data)
    }

    return {
        getBundleFeed
    }
}