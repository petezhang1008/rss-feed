export default function SuggestionSkeletonItem() {
    return <div className="flex items-start bg-white p-4 gap-4 flex-col w-full">
        <div className="skeleton h-4 w-2/3 rounded-lg"></div>
        <div className="skeleton h-4 w-full rounded-lg"></div>
        <div className="skeleton h-4  w-2/3 rounded-lg"></div>
        <div className="skeleton h-4 w-full rounded-lg"></div>
    </div>
}