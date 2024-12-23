import FeedCardSkeleton from "@/app/components/skeleton/feed-card-skeleton";
import FeedInfoSkeleton from "@/app/components/skeleton/feed-info-skeleton";
import HeaderSkeleton from "@/app/components/skeleton/header-skeleton";

export default function Loading() {
    return <div className="flex flex-col size-full overflow-hidden">
        <HeaderSkeleton />
        <div className="p-4 overflow-auto flex-1">
            <div className="flex gap-4 overflow-hidden w-full">
                <div className='grid-flow-dense auto-rows-auto flex flex-col gap-4 overflow-hidden w-3/5 pl-20 pr-8'>
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <FeedCardSkeleton key={index} />
                        ))
                    }
                </div>
                <div className="flex w-80">
                    <FeedInfoSkeleton />
                </div>
            </div>
        </div>
    </div>
}