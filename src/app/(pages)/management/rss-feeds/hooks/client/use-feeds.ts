import { httpClient } from "@/lib/http-client"
import { GetFeedParams, PaginationFeeds } from "@/models/feed-model"


export function useClientFeeds() {
    function getFeedsApi(data: GetFeedParams) {
        return httpClient.get<PaginationFeeds>('/rss-generator/feeds', {
            params: data
        }).then(res => {
            return res.data
        })
    }

    return {
        getFeedsApi
    }
}