import { Bundle } from "@prisma/client";
import { TrashIcon, Pencil1Icon, DotsVerticalIcon, CounterClockwiseClockIcon, CardStackIcon } from "@radix-ui/react-icons"
export default function BundleInfo({ bundle }: { bundle: Bundle }) {
    return (
        <div className="flex flex-col gap-4 w-80 pt-4">
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Customize</h1>
                <div className="flex gap-4">
                    <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                        <Pencil1Icon className="size-4" />
                        Edit
                    </button>
                    <button className="btn btn-outline btn-sm btn-error !h-7 !min-h-7">
                        <TrashIcon className="size-4" />
                        Delete
                    </button>
                    <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                        <DotsVerticalIcon className="size-4" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Description</h1>
                <div className="text-gray-500 text-sm">{bundle.description}</div>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Update Frequency</h1>
                <div className="text-gray-500 text-sm flex items-center gap-2">
                    <CounterClockwiseClockIcon className="size-4"></CounterClockwiseClockIcon>
                    <span><span className="font-bold text-primary font-md">24</span> feeds update at July 29 2024</span>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold flex items-center gap-1">
                    <span>Created via</span>
                    <span>on</span>
                    <span>{bundle.createdAt.toLocaleDateString()}</span>
                </h1>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Feeds</h1>
                <div>
                    <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                        <CardStackIcon className="size-4" />
                        Add to bundle
                    </button>
                </div>
            </div>
        </div>
    )
}