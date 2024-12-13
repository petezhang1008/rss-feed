export default function ListSkeleton() {
    return (
        <div className="flex items-start p-4 gap-8 flex-col w-full" >
            {Array.from({ length: 4 }).map((_, index) => (
                <div className="flex items-start gap-4 w-full flex-col" key={index}>
                    <div className="skeleton h-4 w-2/3 rounded-lg"></div>
                    <div className="skeleton h-4 w-full rounded-lg"></div>
                    <div className="skeleton h-4 w-full rounded-lg"></div>
                </div>
            ))}
        </div>
    )
}