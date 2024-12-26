'use client'
import { httpClient } from "@/lib/http-client"

export const useSubscribe = () => {
    function subscribe(rssId: string) {
        return httpClient.post(`/user/rss/subscribe`, { rssId }).then((res) => {
            return res.data
        })
    }
    return {
        subscribe
    }
}