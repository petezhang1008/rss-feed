'use client';
import { useSearchParams } from "next/navigation"

export default function IframePreview() {
    const websiteLink = decodeURIComponent(useSearchParams().get('website_link') || '');
    return (
        <div className="flex h-full w-4/6">
            <iframe
                className="w-full h-full"
                sandbox="allow-same-origin allow-scripts"
                same-origin
                src={websiteLink}
            />
        </div>
    )
}