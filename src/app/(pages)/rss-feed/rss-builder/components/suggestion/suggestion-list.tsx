'use client'
import { CategoryWithRss } from "@/types/model";
import SuggestionItem from "./suggestion-item";
import { useSearchParams } from "next/navigation";
import useSuggestRss from "../../hooks/use-suggest-rss";

export default function SuggestionList({ categories }: { categories: CategoryWithRss[] }) {
    const { getSuggestRss } = useSuggestRss()
    const searchParams = useSearchParams()
    const categoryId = searchParams.get('categoryId') || ''
    const rssList = getSuggestRss(categoryId, categories)
    return <div className="w-3/5">
        <div className="flex justify-between items-center">
            <p className="text-gray-600 font-semibold">Select which RSS feed you would like to create</p>
            <div className="input input-bordered input-sm flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
            {rssList && rssList.map((rss) => (
                <SuggestionItem key={rss.id} rss={rss} />
            ))}
        </div>
    </div>
}