'use client'

import useTaskPolling from "@/app/hooks/use-task-polling"
import useToast from "@/app/hooks/use-toast"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import useFeedsPaginationStore from "../../stores/use-feeds-pagination"
import FullPageLoading from "@/app/components/loading/full-page-loading"

export default function TaskStatus({ taskId, callback }: { taskId?: string, callback?: () => void }) {
    const pathname = usePathname()
    const { startTaskPolling } = useTaskPolling()
    const { toast } = useToast()
    const { refresh } = useFeedsPaginationStore()
    const router = useRouter()

    useEffect(() => {
        if (taskId) {
            startTaskPolling(taskId).then(async () => {
                await refresh()
                callback && callback()
                router.push(pathname)
            }).catch((error) => {
                toast.error('Oops, something went wrong! Please try again later.')
                console.error(error)
            })
        }
    }, [taskId])
    return (<FullPageLoading />)
}
