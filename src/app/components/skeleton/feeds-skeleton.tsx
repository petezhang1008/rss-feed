export default function FeedsSkeleton() {
    return <div className="flex items-center flex-col grow flex-1 overflow-auto">
        {Array.from({ length: 10 }).map((_, index) => (
            <div className="flex items-start bg-white p-4 gap-4 flex-col w-full border-b border-gray-100" key={index}>
                <div className="flex items-center gap-4 w-full">
                    <div className="flex flex-col gap-4 w-5/6">
                        <div className="skeleton h-4 w-2/3 rounded-lg"></div>
                        <div className="skeleton h-4 w-full rounded-lg"></div>
                        <div className="skeleton h-4 w-full rounded-lg"></div>
                    </div>
                    <div className="flex items-center justify-center h-24 w-[160px]">
                        <div className="skeleton size-full rounded-lg"></div>
                    </div>
                </div>

            </div>
        ))}
    </div>
}