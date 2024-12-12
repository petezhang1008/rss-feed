
import { useRssAction } from "@/app/(pages)/management/my-feeds/hooks/use-rss-action"
import { useContext } from "react"
import { RssItemContext } from "./action-btn"
import { RouterName } from "@/enums/router"
import { redirect } from "next/navigation"

export default function Actions() {
    const { deleteRss } = useRssAction()
    const { rssData } = useContext(RssItemContext)

    function handleEdit() {
        console.log('edit')
    }

    async function handleDelete() {
        const res = await deleteRss(rssData?.id!)
        if (res) {
            redirect(RouterName.MY_FEEDS)
        }
    }

    return (
        <div className="flex flex-col gap-0.5">
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleEdit}>Edit</div>
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleDelete}>Delete</div>
        </div>
    )
}