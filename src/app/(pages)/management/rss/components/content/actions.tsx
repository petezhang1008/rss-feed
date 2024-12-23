
import { useRssAction } from "@/app/(pages)/management/rss/hooks/use-rss-action"
import { UserRss } from "@/types/model"

export default function Actions({ rssData }: { rssData: UserRss }) {
    const { deleteRss, editRss } = useRssAction()

    async function handleEditRss(rssData: UserRss) {
        await editRss(rssData)
    }

    async function handleDeleteRss(rssData: UserRss) {
        await deleteRss(rssData?.id!)
    }

    return (
        <div className="flex flex-col gap-0.5">
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={() => handleEditRss(rssData)}>Edit</div>
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={() => handleDeleteRss(rssData)}>Delete</div>
        </div>
    )
}