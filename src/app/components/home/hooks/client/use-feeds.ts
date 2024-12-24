import { httpClient } from "@/lib/http-client"
import { GetBatchFeedParams, PaginationFeeds } from "@/models/feed-model"

export function useClientFeeds() {

    function getFeedsApi(params: GetBatchFeedParams) {
        return httpClient.get<PaginationFeeds>(`rss/category-feeds`, { params }).then(res => res.data)
    }

    return {
        getFeedsApi
    }
}