import { httpClient } from "@/lib/http-client"
import { GetCategoryFeedParams, PaginationFeeds } from "@/models/feed-model"

export function useClientFeeds() {

    function getFeedsByCategoryApi(params: GetCategoryFeedParams) {
        return httpClient.get<PaginationFeeds>(`rss/category-feeds`, { params }).then(res => res.data)
    }

    return {
        getFeedsByCategoryApi
    }
}