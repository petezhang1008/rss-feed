import { httpClient } from "@/lib/http-client"
import { ExecuteTask } from "@prisma/client"


export function useRssInfo() {

    function getRssTaskDataApi(rssId: string) {
        return httpClient.get<ExecuteTask>('/rss-generator/latest-task', {
            params: {
                rssId
            }
        })
    }

    return {
        getRssTaskDataApi
    }
}