import { deleteAlert } from "@/app/components/common/delete-alert"
import useToast from "@/app/hooks/use-toast"
import { RouterName } from "@/enums/router"
import { httpClient } from "@/lib/http-client"
import { TaskResult } from "@/services/prisma/task-service"
import { UserRss } from "@/types/model"
import { redirect } from "next/navigation"

export const useRssAction = () => {
    const { toast } = useToast()

    const deleteRssApi = async (id: string) => {
        const res = await httpClient.delete(`/user/rss/${id}`)
        return res
    }

    const editRssApi = async (data: UserRss) => {
        const res = await httpClient.put(`/user/rss`, { data })
        return res
    }

    const refreshRssApi = async (rssId: string): Promise<TaskResult> => {
        return httpClient.get<TaskResult>('/rss/refresh', {
            params: {
                rssId
            }
        }).then(res => res.data)
    }

    async function deleteRss(id: string) {
        const res = await deleteAlert()
        if (res.isConfirmed) {
            const res = await deleteRssApi(id)
            if (res) {
                toast.success('RSS deleted successfully')
                redirect(RouterName.RSS)
            }
        }
    }

    async function editRss(rssData: UserRss) {
        const res = await editRssApi(rssData)
        if (res) {
            toast.success('RSS updated successfully')
            redirect(RouterName.RSS)
        }
    }

    return {
        deleteRssApi,
        editRssApi,
        refreshRssApi,
        deleteRss,
        editRss
    }
}