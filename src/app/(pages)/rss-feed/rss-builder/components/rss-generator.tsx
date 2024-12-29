'use client';
import { createRssAction, createUserRssAction } from "@/app/lib/create-rss-action";
import { RouterName } from "@/enums/router";
import { RssGeneratorType } from "@/enums/rss";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import FullPageLoading from "@/app/components/loading/full-page-loading";
import useToast from "@/app/hooks/use-toast";


export default function RssBuilder() {
    const [websiteLink, setWebsiteLink] = useState('');
    const { data: session } = useSession()
    const userId = session?.user?.id
    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) {
        setWebsiteLink(e.target.value);
    }

    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    async function handleGenerate() {
        setIsLoading(true)
        if (userId) {
            createUserRssAction({
                type: RssGeneratorType.RSS,
                website: websiteLink,
            }).then((data) => {
                router.push(`${RouterName.RSS_FEEDS}/${data.userRss.id}${data.task ? `?taskId=${data.task?.id}` : ''}`)
            }).catch((error) => {
                toast.error('Oops, Create RSS Feed Failed! Please try again later.')
                console.error(error)
            }).finally(() => {
                setIsLoading(false)
            })
        } else {
            createRssAction({
                type: RssGeneratorType.RSS,
                website: websiteLink,
            }).then((data) => {
                router.push(`${RouterName.RSS_DETAIL}/${data.rss.id}${data.task ? `?taskId=${data.task?.id}` : ''}`)
            }).catch((error) => {
                toast.error('Oops, Create RSS Feed Failed! Please try again later.')
                console.error(error)
            }).finally(() => {
                setIsLoading(false)
            })
        }
    }


    return (
        <div className="join">
            <input
                value={websiteLink}
                onChange={handleWebsiteLink}
                className="input input-bordered join-item  w-[600px]"
                placeholder="RSS Feed Link" />
            <button className="btn join-item btn-primary" onClick={handleGenerate}>Generate</button>
            {isLoading && <FullPageLoading />}
        </div>
    )
}