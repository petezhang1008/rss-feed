import { httpClient } from "@/lib/http-client"
import { GetBundleFeedParams, PaginationFeeds, QueryUserFeedParams } from "@/models/feed-model"

export function useClientFeeds() {

    function getFeedsApi(params: QueryUserFeedParams | GetBundleFeedParams) {
        if ('bundleId' in params) {
            return httpClient.get<PaginationFeeds>(`/bundle/feeds`, { params }).then(res => res.data)
        } else {
            return httpClient.get<PaginationFeeds>(`/user/feeds`, { params }).then(res => res.data)
        }
    }


    return {
        getFeedsApi
    }
}