import FeedsSkeletonItem from "./feeds-skeleton-item";

export default function FeedsSkeleton() {
    return <div className="flex items-center flex-col grow flex-1 overflow-auto">
        {Array.from({ length: 10 }).map((_, index) => (
            <FeedsSkeletonItem key={index}></FeedsSkeletonItem>
        ))}
    </div>
}