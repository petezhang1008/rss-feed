export default function NavSkeleton() {
    return <div className="flex items-center flex-col gap-4 w-40 overflow-auto">
        <div className="flex items-start bg-white p-4 gap-4 flex-col w-full">
            <div className="skeleton h-4 w-2/3 rounded-lg"></div>
            <div className="skeleton h-4 w-full rounded-lg"></div>
            <div className="skeleton h-4  w-2/3 rounded-lg"></div>
            <div className="skeleton h-4 w-full rounded-lg"></div>
        </div>
    </div>
}