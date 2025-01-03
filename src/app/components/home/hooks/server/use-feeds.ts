import { injectService } from "@/inversify.config"
import { FeedService } from "@/services/prisma/feed-service"
import { useCategory } from "./use-category"

export const useFeed = () => {

    const feedService = injectService<FeedService>(FeedService)
    const { getCategories } = useCategory()

    async function getFeedByCategory({ categoryId, page, pageSize }: { categoryId?: string, page: number, pageSize: number }) {
        return feedService.getFeedByCategoryId({
            page,
            pageSize,
            categoryId
        })
    }

    return {
        getCategories,
        getFeedByCategory
    }
}