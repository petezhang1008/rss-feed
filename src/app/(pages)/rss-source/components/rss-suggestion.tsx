import { CategoryWithRss } from "@/types/model";
import SuggestionCategories from "./suggestion/suggestion-categories";
import SuggestionList from "./suggestion/suggestion-list";

export default function RssSuggestion({ categories }: { categories: CategoryWithRss[] }) {
    return (
        <div className="flex justify-center gap-2 bg-white p-4 flex-1 gap-8">
            <SuggestionCategories categories={categories} />
            <SuggestionList categories={categories} />
        </div>
    )
}