import SuggestionItem from "./suggestion-item";

export default function SuggestionList() {
    return <div className="w-3/5">
        <div className="flex justify-between items-center">
            <p className="text-gray-600 font-semibold">Select which RSS feed you would like to create</p>
            <div className="input input-bordered input-sm flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 120 }).map((_, index) => (
                <SuggestionItem key={index} />
            ))}
        </div>
    </div>
}