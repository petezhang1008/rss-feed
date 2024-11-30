'use client';
import Link from "next/link";
import { RouterName } from "@/enums/router";
import { useMemo, useState } from "react";
export default function RssBuilder() {
    const [ websiteLink, setWebsiteLink ] = useState('');

    function handleWebsiteLink(e: React.ChangeEvent<HTMLInputElement>) { 
        setWebsiteLink(e.target.value);
    }

    const encodeWebsiteLink = useMemo(() => {
        return `${RouterName.WEBSITE_PREVIEW}?website_link=${encodeURIComponent(websiteLink)}`;
    }, [websiteLink])

    return (
        <div className="flex items-center justify-center pt-10">
            <div className="join">
                <input
                    value={websiteLink}
                    onChange={handleWebsiteLink}
                    className="input input-bordered join-item rounded-l-full  w-[400px]"
                    placeholder="Href" />
                <Link href={encodeWebsiteLink} >
                    <button className="btn join-item rounded-r-full">Subscribe</button>
                </Link>
            </div>
        </div>
    )
}