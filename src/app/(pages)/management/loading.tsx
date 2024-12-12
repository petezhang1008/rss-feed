import CardSkeleton from "@/app/components/skeleton/card-skeleton";
import FunctionBarSkeleton from "@/app/components/skeleton/function-bar-skeleton";
import HeaderSkeleton from "@/app/components/skeleton/header-skeleton";

export default function Loading() {
    return <div className="flex flex-col gap-4">
        <HeaderSkeleton />
        <div className="px-4 w-full">
            <FunctionBarSkeleton />
        </div>
        <div className="grid gap-4 grid-cols-3 w-full px-4">
            {Array.from({ length: 21 }).map((_, index) => (
                <CardSkeleton key={index} />
            ))}
        </div>
    </div>
}