import { httpClient } from "@/lib/http-client"
import { PaginationFeeds } from "@/models/feed-model"
import { PaginationParams } from "@/types/pagination"

export function useClientUserFeed() {
    function getUserFeedsApi(params: PaginationParams) {
        return httpClient.get<PaginationFeeds>(`/user/feeds`, { params }).then(res => res.data)
    }

    return {
        getUserFeedsApi
    }
}