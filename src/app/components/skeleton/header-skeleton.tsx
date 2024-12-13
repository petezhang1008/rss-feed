export default function HeaderSkeleton() {
    return (
        <div className="header flex items-center justify-between h-14 p-2 w-full gap-10 border-b border-gray-200 px-10 bg-white">
            <div className="skeleton h-full rounded w-32"></div>
            <div className="skeleton size-10"></div>
        </div>
    )
}