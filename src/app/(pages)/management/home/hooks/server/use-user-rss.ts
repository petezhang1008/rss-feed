import { injectService } from "@/inversify.config"
import { UserRssService } from "@/services/prisma/user-rss-service"

export const useUserRss = () => {
    const userRssService = injectService<UserRssService>(UserRssService)
    async function getUserRssListWithTaskSuccessCount(userId: string) {
        return userRssService.getUserRssListWithTaskSuccessCount(userId)
    }
    return {
        getUserRssListWithTaskSuccessCount
    }
}