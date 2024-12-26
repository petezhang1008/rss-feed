import SuggestionSkeletonItem from "./suggestion-skeleton-item";

export default function SuggestionSkeleton() {
    return <div className="flex items-center flex-col gap-4 w-64 overflow-auto">
        {Array.from({ length: 3 }).map((_, index) => (
            <SuggestionSkeletonItem key={index} />
        ))}
    </div>
}