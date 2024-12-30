'use client'
import { Pencil1Icon, TrashIcon, DotsVerticalIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useRssAction } from "../../../rss/hooks/use-rss-action";
import { UserRssWithRssAndBundle } from "@/types/model";
import { usePathname, useRouter } from "next/navigation";
import useToast from "@/app/hooks/use-toast";
import FullPageLoading from "@/app/components/loading/full-page-loading";
import { useState } from "react";
import useFeedsPaginationStore from "../../stores/use-feeds-pagination";
import TaskStatus from "../../../../rss-feed/rss-builder/components/task-polling-status";

export default function RssCustomize({ rssDetail }: { rssDetail: UserRssWithRssAndBundle }) {
    const { deleteRss, editRss, refreshRssApi } = useRssAction()
    const { toast } = useToast()
    const { refresh } = useFeedsPaginationStore()

    async function handleEditRss(rssDetail: UserRssWithRssAndBundle) {
        await editRss(rssDetail)
    }

    async function handleDeleteRss(rssDetail: UserRssWithRssAndBundle) {
        await deleteRss(rssDetail.id)
    }
    const [isLoading, setIsLoading] = useState(false)
    const [taskId, setTaskId] = useState<string | undefined>(undefined)
    async function handleRefresh(rssId: string) {
        setIsLoading(true)
        await refreshRssApi(rssId).then(data => {
            setTaskId(data?.id)
        }).catch(error => {
            toast.success('There is no data to refresh')
            setIsLoading(false)
        })
    }

    function handleRefreshCallback() {
        setTaskId(undefined)
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col gap-2 px-2">
            <h1 className="font-semibold">Customize</h1>
            <div className="flex gap-4">
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7 cursor-pointer" onClick={() => handleEditRss(rssDetail)}>
                    <Pencil1Icon className="size-4" />
                    Edit
                </button>
                <button className="btn btn-outline btn-sm !h-7 !min-h-7 cursor-pointer group text-red-600 !border-red-600 hover:bg-red-600 !hover:text-white"
                    onClick={() => handleDeleteRss(rssDetail)}>
                    <TrashIcon className="size-4 group-hover:text-white !text-red-600" />
                    Delete
                </button>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7 cursor-pointer" onClick={() => handleRefresh(rssDetail.rssId)}>
                    <UpdateIcon className="size-4" />
                    Refresh
                </button>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                    <DotsVerticalIcon className="size-4" />
                </button>
            </div>
            {isLoading && <TaskStatus taskId={taskId} callback={handleRefreshCallback} />}
        </div>
    )
}