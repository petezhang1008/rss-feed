'use client';
import { RssGeneratorType } from "@/enums/rss";
import useWebsiteLink from "../hooks/use-website-link";
import useNodePathStore from "../store/use-node-path";
import useSelectedNodesStore from "../store/use-selected-nodes"
import { createRssTaskAction } from "@/app/lib/create-rss-action"
import { useRouter } from 'next/navigation';
import { RouterName } from "@/enums/router";
import { useSession } from "next-auth/react";
import useToast from "@/app/hooks/use-toast";
import { useState } from "react";
import TaskPollingStatus from "../../rss-builder/components/task-polling-status";

export default function PreviewFooter() {
    const selectedNodes = useSelectedNodesStore(state => state.selectedNodes)
    const { websiteLink } = useWebsiteLink()
    const path = useNodePathStore(state => state.path)
    const { data: session } = useSession()
    const userId = session?.user?.id
    const { toast } = useToast()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [taskId, setTaskId] = useState<string | undefined>(undefined)
    let rssId = ''
    async function handleGenerate() {
        setIsLoading(true)
        createRssTaskAction({
            type: RssGeneratorType.WEBSITE,
            website: websiteLink,
        }, userId).then((data) => {
            if ('userRss' in data) {
                rssId = data.userRss.id
            } else if ('rss' in data) {
                rssId = data.rss.id
            }
            if (data.task?.id) {
                setTaskId(data.task?.id)
            } else {
                handleCallback()
            }
        }).catch((error) => {
            toast.error('Oops, Create RSS Feed Failed! Please try again later.')
            console.error(error)
            setIsLoading(false)
        })
    }
    function handleCallback() {
        const link = userId ? `${RouterName.RSS_FEEDS}/${rssId}` : `${RouterName.RSS_DETAIL}/${rssId}`
        router.push(link)
        setIsLoading(false)
    }
    const disabled = !websiteLink || !path

    return (
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-primary font-semibold"> {selectedNodes?.length || 0} Nodes Selected </div>
            <button className="btn btn-sm btn-primary" disabled={disabled} onClick={handleGenerate}>Generate</button>
            {isLoading && <TaskPollingStatus taskId={taskId} callback={handleCallback} />}
        </div>
    )
}