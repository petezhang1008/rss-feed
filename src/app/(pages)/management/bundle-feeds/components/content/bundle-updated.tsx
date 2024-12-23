import { Bundle } from "@/types/model";
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";

export default function BundleUpdated({ bundle }: { bundle: Bundle }) {
    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold">Update Frequency</h1>
            <div className="text-gray-500 text-sm flex items-center gap-2">
                <CounterClockwiseClockIcon className="size-4 shrink-0"></CounterClockwiseClockIcon>
                <span><span className="font-bold text-primary font-md">24</span> feeds update at July 29 2024</span>
            </div>
        </div>
    )
}