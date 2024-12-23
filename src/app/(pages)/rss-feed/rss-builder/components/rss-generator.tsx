'use client';
import { createRssAction } from "@/app/lib/create-rss-action";
import { RouterName } from "@/enums/router";
import { RssGeneratorType } from "@/enums/rss";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function RssBuilder() {
    const [websiteLink, setWebsiteLink] = useState('');
    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) {
        setWebsiteLink(e.target.value);
    }

    async function handleGenerate() {
        const res = await createRssAction({
            type: RssGeneratorType.RSS,
            website: websiteLink,
            frequency: "daily",
        })
        redirect(`${RouterName.RSS_FEEDS}/${res.id}`)
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