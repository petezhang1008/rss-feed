import { useSearchParams } from "next/navigation";

export default function useWebsiteLink() {
    const websiteLink = decodeURIComponent(useSearchParams().get('website_link') || '')
    return websiteLink
}
