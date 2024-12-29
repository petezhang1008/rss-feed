'use client';
import { RssGeneratorType } from "@/enums/rss";
import useWebsiteLink from "../hooks/use-website-link";
import useNodePathStore from "../store/use-node-path";
import useSelectedNodesStore from "../store/use-selected-nodes"
import { createRssAction, createUserRssAction } from "@/app/lib/create-rss-action"
import { useRouter } from 'next/navigation';
import { RouterName } from "@/enums/router";
import useIframeDataStore from "../store/use-iframe-data";
import { useSession } from "next-auth/react";
import useToast from "@/app/hooks/use-toast";

export default function PreviewFooter() {
    const selectedNodes = useSelectedNodesStore(state => state.selectedNodes)
    const { websiteLink } = useWebsiteLink()
    const path = useNodePathStore(state => state.path)
    const title = useIframeDataStore(state => state.title)
    const { data: session } = useSession()
    const userId = session?.user?.id
    const { toast } = useToast()
    const router = useRouter()


    async function submit() {
        if (!websiteLink || !path) return
        if (userId) {
            createUserRssAction({
                type: RssGeneratorType.WEBSITE,
                website: websiteLink,
                selector: path,
                title: title || ""
            }).then(data => {
                router.push(`${RouterName.RSS_FEEDS}/${data.userRss.id}${data.task?.id ? `?taskId=${data.task?.id}` : ''}`)
            }).catch(error => {
                toast.error('Failed to create rss')
                console.error(error)
            })
        } else {
            createRssAction({
                type: RssGeneratorType.WEBSITE,
                website: websiteLink,
                selector: path,
                title: title || ""
            }).then(data => {
                router.push(`${RouterName.RSS_DETAIL}/${data.rss.id}${data.task?.id ? `?taskId=${data.task?.id}` : ''}`)
            }).catch(error => {
                toast.error('Failed to create rss')
                console.error(error)
            })
        }
    }

    const disabled = !websiteLink || !path

    return (
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-primary font-semibold"> {selectedNodes?.length || 0} Nodes Selected </div>
            <button className="btn btn-sm btn-primary" disabled={disabled} onClick={submit}>Generate</button>
        </div>
    )
}