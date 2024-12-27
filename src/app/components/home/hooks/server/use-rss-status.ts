import { injectService } from "@/inversify.config"
import { FeedService } from "@/services/prisma/feed-service"
import dayjs from "dayjs"

export const useRssStatus = () => {
    const feedService = injectService<FeedService>(FeedService)
    const getLatestFeedCount = async () => {
        const data = await feedService.getLatestFeedCount(dayjs().subtract(1, 'day').toDate())
        return data
    }
    return {
        getLatestFeedCount
    }
}
