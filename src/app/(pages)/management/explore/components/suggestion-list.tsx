'use client'
import SuggestionItem from "@/app/(pages)/rss-feed/rss-builder/components/suggestion/suggestion-item";
import useSuggestRss from "@/app/(pages)/rss-feed/rss-builder/hooks/use-suggest-rss";
import { RouterName } from "@/enums/router";
import { CategoryWithRss } from "@/types/model";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuggestionList({ categories }: { categories: CategoryWithRss[] }) {
    const { getSuggestRss } = useSuggestRss()
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('categoryId') || ''
    const rssList = getSuggestRss(categoryId, categories)
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-gray-600 font-semibold">Select which RSS feed you would like to create</p>
                <div className="input input-bordered input-sm flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {rssList && rssList.map((rss) => (
                    <Link href={`${RouterName.RSS_DETAIL}?rssId=${rss.id}`} key={rss.id}>
                        <SuggestionItem key={rss.id} rss={rss} />
                    </Link>
                ))}
            </div>
        </div>
    )
}