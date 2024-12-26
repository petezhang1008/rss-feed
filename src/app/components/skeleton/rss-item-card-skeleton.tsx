export default function RssItemCardSkeleton() {
    return (
        <div className="flex items-center justify-center px-4 bg-white gap-4 flex-col w-full border-b border-gray-100 rounded-md h-16">
            <div className="flex items-center gap-4 w-full">
                <div className="flex items-center justify-center size-10 shrink-0">
                    <div className="skeleton size-full rounded-full"></div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton h-6 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}