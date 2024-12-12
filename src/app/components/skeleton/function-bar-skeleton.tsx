export default function FunctionBarSkeleton() {
    return <div className="header flex items-center justify-between h-8 p-2 w-full gap-10 px-4 bg-white rounded-lg">
        <div className="flex gap-4 items-center grow h-full">
            <div className="skeleton h-full rounded w-32"></div>
            <div className="skeleton h-full rounded w-16"></div>
        </div>
        <div className="skeleton rounded h-full w-16"></div>
    </div>
}