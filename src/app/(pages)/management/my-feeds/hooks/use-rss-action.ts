import { httpClient } from "@/lib/http-client"

export const useRssAction = () => {
    const deleteRss = async (id: string) => {
        const res = await httpClient.delete(`/rss-generator`, { params: { id } })
        return res
    }

    return {
        deleteRss,
    }
}