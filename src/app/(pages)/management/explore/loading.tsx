import FunctionBarSkeleton from "@/app/components/skeleton/function-bar-skeleton";
import HeaderSkeleton from "@/app/components/skeleton/header-skeleton";
import RssItemCardSkeleton from "@/app/components/skeleton/rss-item-card-skeleton";

export default function Loading() {
    return <div className="flex flex-col gap-4">
        <HeaderSkeleton />
        <div className="px-4 w-full flex flex-col gap-4">
            <FunctionBarSkeleton />
            <FunctionBarSkeleton />
        </div>
        <div className="grid gap-4 grid-cols-4 w-full px-4">
            {Array.from({ length: 40 }).map((_, index) => (
                <RssItemCardSkeleton key={index} />
            ))}
        </div>
    </div>
}