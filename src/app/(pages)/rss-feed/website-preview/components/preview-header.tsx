'use client';
import { useSearchParams } from "next/navigation"

export default function PreviewHeader() {
    const websiteLink = decodeURIComponent(useSearchParams().get('website_link') || '');
    return (
        <div className="p-2 bg-gray-50 flex items-center justify-center border-b border-gray-200 relative">
            <div className="rounded-lg border border-gray-200 py-1.5 px-4 bg-white text-gray-600 w-max-4/5 truncate">{ websiteLink }</div>
            {/* <div className="absolute right-4 top-3">
                <span>Type of Content</span>
            </div> */}
        </div>
    )
}