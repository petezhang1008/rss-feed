
import { useRssAction } from "@/app/(pages)/management/my-feeds/hooks/use-rss-action"
import { RssGenerator } from "@prisma/client"

export default function Actions({ rssData }: { rssData: RssGenerator }) {
    const { deleteRss, editRss } = useRssAction()

    async function handleEditRss(rssData: RssGenerator) {
        await editRss(rssData)
    }

    async function handleDeleteRss(rssData: RssGenerator) {
        await deleteRss(rssData?.id!)
    }

    return (
        <div className="flex flex-col gap-0.5">
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={() => handleEditRss(rssData)}>Edit</div>
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={() => handleDeleteRss(rssData)}>Delete</div>
        </div>
    )
}