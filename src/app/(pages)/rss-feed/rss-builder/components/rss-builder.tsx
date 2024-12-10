'use client';
import { RouterName } from "@/enums/router";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function RssBuilder() {
    const [websiteLink, setWebsiteLink] = useState('');
    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) {
        setWebsiteLink(e.target.value);
    }
    const encodeWebsiteLink = useMemo(() => {
        return `${RouterName.WEBSITE_PREVIEW}?website_link=${encodeURIComponent(websiteLink)}`;
    }, [websiteLink])

    return (
        <div className="join">
            <input
                value={websiteLink}
                onChange={handleWebsiteLink}
                className="input input-bordered join-item  w-[600px]"
                placeholder="Enter Website Link" />
            <Link href={encodeWebsiteLink} >
                <button className="btn join-item btn-primary">Load Website</button>
            </Link>
        </div>
    )
}