import { httpClient } from "@/lib/http-client"
import { GetBundleFeedParams, PaginationFeeds } from "@/models/feed-model"

export function useClientBundleFeeds() {
    function getBundleFeedsApi(params: GetBundleFeedParams) {
        return httpClient.get<PaginationFeeds>(`/bundle/feeds`, { params }).then(res => res.data)
    }

    return {
        getBundleFeedsApi
    }
}