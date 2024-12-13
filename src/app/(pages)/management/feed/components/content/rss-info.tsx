import { RssGeneratorType } from "@/enums/rss";
import { RssGenerator } from "@prisma/client";
import { TrashIcon, Pencil1Icon, DotsVerticalIcon, Link2Icon, CounterClockwiseClockIcon, CardStackIcon } from "@radix-ui/react-icons"
import Link from "next/link";
export default function RssInfo({ rssDetail }: { rssDetail: RssGenerator }) {
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
                <div className="text-gray-500 text-sm">{rssDetail.description}</div>
            </div>
            {rssDetail.author && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Author</h1>
                <div className="text-gray-500 text-sm">{rssDetail.author}</div>
            </div>}
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Update Frequency</h1>
                <div className="text-gray-500 text-sm flex items-center gap-2">
                    <CounterClockwiseClockIcon className="size-4"></CounterClockwiseClockIcon>
                    <span><span className="font-bold text-primary font-md">24</span> feeds update at July 29 2024</span>
                </div>
                <div>
                    <div className="badge badge-primary text-sm">{rssDetail.frequency}</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold flex items-center gap-1">
                    <span>Created via</span>
                    <span className="border border-gray-200 rounded-md px-2 bg-gray-100">{rssDetail.type}</span>
                    <span>on</span>
                    <span>{rssDetail.createdAt.toLocaleDateString()}</span>
                </h1>
                <div className="text-gray-500 text-sm flex items-center gap-1">
                    <Link href={rssDetail.website} target="_blank" className="flex items-center gap-1 hover:text-blue-700 hover:underline">
                        <Link2Icon className="size-4" />
                        <span>{rssDetail.website}</span>
                    </Link>
                </div>
                {
                    rssDetail.type === RssGeneratorType.WEBSITE &&
                    <button className="btn btn-sm !h-7 !min-h-7">
                        <Pencil1Icon className="size-4" />
                        Update Builder Rules
                    </button>
                }
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Bundles</h1>
                <div className="text-gray-500 text-sm">{rssDetail.bundle?.title}</div>
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