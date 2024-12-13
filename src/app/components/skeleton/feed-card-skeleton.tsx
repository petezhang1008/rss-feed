export default function FeedCardSkeleton() {
    return <div className="w-full bg-white rounded-lg border border-gray-200 gap-4 flex flex-col p-4">
        <div className="skeleton h-6 w-1/2"></div>
        <div className="skeleton h-80 w-full"></div>
        <div className="skeleton h-4 w-2/3"></div>
        <div className="skeleton h-4 w-full"></div>
    </div>
}