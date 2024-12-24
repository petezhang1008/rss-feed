import { httpClient } from "@/lib/http-client"
import { Task } from "@/types/model"


export function useRssInfo() {

    function getRssTaskDataApi(rssId: string) {
        return httpClient.get<Task>('/rss/latest-task', {
            params: {
                rssId
            }
        }).then(res => {
            return res.data
        })
    }

    return {
        getRssTaskDataApi
    }
}