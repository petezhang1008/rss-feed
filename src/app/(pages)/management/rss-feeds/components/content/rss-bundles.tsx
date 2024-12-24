'use client'
import TippyPopover from "@/app/components/common/tippy-popover";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BundlesSelector from "../../../rss/components/content/bundles-selector";
import { useState } from "react";
import { Bundle, UserRssWithRssAndBundle } from "@/types/model";

export default function RssBundles({ rssDetail }: { rssDetail: UserRssWithRssAndBundle }) {

    const [rssData, setRssData] = useState<UserRssWithRssAndBundle>(rssDetail)
    function updateRssBundle(bundle: Bundle | null) {
        if (bundle) {
            setRssData(prev => ({ ...prev, bundleId: bundle.id, bundle: bundle }))
        } else {
            setRssData(prev => ({ ...prev, bundleId: null, bundle: null }))
        }
    }

    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold">Bundles</h1>
            <div className="flex items-start gap-4 flex-col justify-start">
                <TippyPopover content={<BundlesSelector rssData={rssData} updateRssBundle={updateRssBundle} />} props={{
                    trigger: 'click'
                }}>
                    {rssData?.bundle ?
                        <div className="badge badge-primary badge badge-outline text-sm cursor-pointer">{rssData.bundle?.title}</div> :
                        <div className="flex justify-start w-full">
                            <button className="btn btn-outline btn-xs btn-primary">
                                <CardStackPlusIcon className="size-4" />
                                Add to bundle
                            </button>
                        </div>}
                </TippyPopover>
            </div>
        </div >
    )
}