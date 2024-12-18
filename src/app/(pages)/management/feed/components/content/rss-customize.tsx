'use client'
import { RssGenerator } from "@prisma/client";
import { Pencil1Icon, TrashIcon, DotsVerticalIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useRssAction } from "../../../my-feeds/hooks/use-rss-action";

export default function RssCustomize({ rss }: { rss: RssGenerator }) {
    const { deleteRss, editRss, refreshRssApi } = useRssAction()
    async function handleEditRss(rss: RssGenerator) {
        await editRss(rss)
    }

    async function handleDeleteRss(rss: RssGenerator) {
        await deleteRss(rss.id)
    }

    async function handleRefresh(rssId: string) {
        await refreshRssApi(rssId)
    }

    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold">Customize</h1>
            <div className="flex gap-4">
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7 cursor-pointer" onClick={() => handleEditRss(rss)}>
                    <Pencil1Icon className="size-4" />
                    Edit
                </button>
                <button className="btn btn-outline btn-sm !h-7 !min-h-7 cursor-pointer group text-red-600 !border-red-600 hover:bg-red-600 !hover:text-white"
                    onClick={() => handleDeleteRss(rss)}>
                    <TrashIcon className="size-4 group-hover:text-white !text-red-600" />
                    Delete
                </button>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7 cursor-pointer" onClick={() => handleRefresh(rss.id)}>
                    <UpdateIcon className="size-4" />
                    Refresh
                </button>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                    <DotsVerticalIcon className="size-4" />
                </button>
            </div>
        </div>
    )
}