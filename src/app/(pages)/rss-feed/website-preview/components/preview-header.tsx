'use client';
import useWebsiteLink from "../hooks/use-website-link";

export default function PreviewHeader() {
    const websiteLink = useWebsiteLink()
    return (
        <div className="p-2 bg-gray-50 flex items-center justify-center border-b border-gray-200 relative">
            <div className="rounded-lg border border-gray-200 py-1.5 px-4 bg-white text-gray-600 w-2/3 truncate">{websiteLink}</div>
        </div>
    )
}