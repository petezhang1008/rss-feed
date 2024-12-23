import SuggestionCategories from "./suggestion/suggestion-categories";
import SuggestionList from "./suggestion/suggestion-list";

export default function RssSuggestion() {
    return (
        <div className="flex justify-center gap-2 bg-white p-4 flex-1 gap-8">
            <SuggestionCategories />
            <SuggestionList />
        </div>
    )
}