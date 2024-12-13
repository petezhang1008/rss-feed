'use client'
import { RssGeneratorType } from "@/enums/rss";
import { Bundle, RssGenerator } from "@prisma/client";
import { TrashIcon, Pencil1Icon, DotsVerticalIcon, Link2Icon, CounterClockwiseClockIcon, CardStackIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { useRssAction } from "../../../my-feeds/hooks/use-rss-action";
import TippyPopover from "@/app/components/common/tippy-popover";
import BundleTag from "../../../my-feeds/components/content/bundle-tag";
import BundlesSelector from "../../../my-feeds/components/content/bundles-selector";
import { useState } from "react";
export default function RssInfo({ rssDetail }: { rssDetail: RssGenerator }) {

    const { deleteRss, editRss } = useRssAction()
    const [rssData, setRssData] = useState<RssGenerator>(rssDetail)

    function updateRssBundle(bundle: Bundle | null) {
        if (bundle) {
            setRssData(prev => ({ ...prev, bundleId: bundle.id, bundle: bundle }))
        } else {
            setRssData(prev => ({ ...prev, bundleId: null, bundle: null }))
        }
    }

    async function handleEditRss(rssData: RssGenerator) {
        await editRss(rssData)
    }

    async function handleDeleteRss(rssData: RssGenerator) {
        await deleteRss(rssData.id)
    }

    return (
        <div className="flex flex-col gap-4 w-80 pt-4">
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Customize</h1>
                <div className="flex gap-4">
                    <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7 cursor-pointer" onClick={() => handleEditRss(rssData)}>
                        <Pencil1Icon className="size-4" />
                        Edit
                    </button>
                    <button className="btn btn-outline btn-sm btn-error !h-7 !min-h-7 cursor-pointer" onClick={() => handleDeleteRss(rssData)}>
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
                <div className="text-gray-500 text-sm">{rssData.description}</div>
            </div>
            {rssData.author && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Author</h1>
                <div className="text-gray-500 text-sm">{rssData.author}</div>
            </div>}
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Update Frequency</h1>
                <div className="text-gray-500 text-sm flex items-center gap-2">
                    <CounterClockwiseClockIcon className="size-4"></CounterClockwiseClockIcon>
                    <span><span className="font-bold text-primary font-md">24</span> feeds update at July 29 2024</span>
                </div>
                <div>
                    <div className="badge badge-primary text-sm">{rssData.frequency}</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold flex items-center gap-1">
                    <span>Created via</span>
                    <span className="border border-gray-200 rounded-md px-2 bg-gray-100">{rssData.type}</span>
                    <span>on</span>
                    <span>{rssData.createdAt.toLocaleDateString()}</span>
                </h1>
                <div className="text-gray-500 text-sm flex items-center gap-1">
                    <Link href={rssData.website} target="_blank" className="flex items-center gap-1 hover:text-blue-700 hover:underline">
                        <Link2Icon className="size-4" />
                        <span>{rssData.website}</span>
                    </Link>
                </div>
                {
                    rssData.type === RssGeneratorType.WEBSITE &&
                    <button className="btn btn-sm !h-7 !min-h-7">
                        <Pencil1Icon className="size-4" />
                        Update Builder Rules
                    </button>
                }
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Bundles</h1>
                <div className="flex items-start gap-4 flex-col justify-start">
                    {rssData?.bundle && <BundleTag bundle={rssData.bundle} />}
                    <TippyPopover content={<BundlesSelector rssData={rssDetail} updateRssBundle={updateRssBundle} />} props={{
                        trigger: 'click'
                    }}>
                        <div className="flex justify-start w-full">
                            <button className="btn btn-outline btn-xs btn-primary">
                                <CardStackIcon className="size-4" />
                                Add to bundle
                            </button>
                        </div>
                    </TippyPopover>
                </div>
            </div >
        </div >
    )
}