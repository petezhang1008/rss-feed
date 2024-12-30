import { CategoryWithRss } from "@/types/model";
import SuggestionList from "./suggestion-list";
import CategoryList from "./category-list";

export default function ExploreContent({ categories }: { categories: CategoryWithRss[] }) {
    return (
        <div className="flex flex-col gap-4">
            <CategoryList categories={categories} />
            <SuggestionList categories={categories} />
        </div>
    )
}