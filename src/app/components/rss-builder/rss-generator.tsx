'use client';
import { createRssTaskAction } from "@/app/lib/create-rss-action";
import { RouterName } from "@/enums/router";
import { RssGeneratorType } from "@/enums/rss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useToast from "@/app/hooks/use-toast";
import TaskPollingStatus from "./task-polling-status";


export default function RssBuilder() {
    const [websiteLink, setWebsiteLink] = useState('');
    const { data: session } = useSession()
    const userId = session?.user?.id
    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) {
        setWebsiteLink(e.target.value);
    }

    const [isLoading, setIsLoading] = useState(false)
    const [taskId, setTaskId] = useState<string | undefined>(undefined)
    const { toast } = useToast()
    const router = useRouter()
    let rssId = ''

    async function handleGenerate() {
        setIsLoading(true)
        createRssTaskAction({
            type: RssGeneratorType.RSS,
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
        const link = userId ? `${RouterName.RSS_FEEDS}/${rssId}` : `${RouterName.RSS_DETAIL}?rssId=${rssId}`
        router.push(link)
        setIsLoading(false)
    }


    return (
        <div className="join">
            <input
                value={websiteLink}
                onChange={handleWebsiteLink}
                className="input input-bordered join-item  w-[600px]"
                placeholder="RSS Feed Link" />
            <button className="btn join-item btn-primary" onClick={handleGenerate}>Generate</button>
            {isLoading && <TaskPollingStatus taskId={taskId} callback={handleCallback} />}
        </div>
    )
}