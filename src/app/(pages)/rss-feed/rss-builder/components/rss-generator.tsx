'use client';
import { createRssAction, createUserRssAction } from "@/app/lib/create-rss-action";
import { RouterName } from "@/enums/router";
import { RssGeneratorType } from "@/enums/rss";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";


export default function RssBuilder() {
    const [websiteLink, setWebsiteLink] = useState('');
    const { data: session } = useSession()
    const userId = session?.user?.id
    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) {
        setWebsiteLink(e.target.value);
    }

    async function handleGenerate() {
        if (userId) {
            const userRss = await createUserRssAction({
                type: RssGeneratorType.RSS,
                website: websiteLink,
            })
            redirect(`${RouterName.RSS_FEEDS}/${userRss.id}`)
        } else {
            const res = await createRssAction({
                type: RssGeneratorType.RSS,
                website: websiteLink,
            })
            redirect(`${RouterName.RSS_DETAIL}/${res.id}`)
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
        </div>
    )
}