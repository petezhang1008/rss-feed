'use client'
import TippyPopover from "@/app/components/common/tippy-popover";
import { Bundle, RssGenerator } from "@prisma/client";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BundlesSelector from "./bundles-selector";
import { useState } from "react";
import { useEventStop } from "@/app/hooks/use-event-stop";

export default function BundleTag({ rss }: { rss: RssGenerator }) {
    const [rssData, setRssData] = useState<RssGenerator>(rss)

    function updateRssBundle(bundle: Bundle | null) {
        if (bundle) {
            setRssData(prev => ({ ...prev, bundleId: bundle.id, bundle: bundle }))
        } else {
            setRssData(prev => ({ ...prev, bundleId: null, bundle: null }))
        }
    }

    const { stopEvent } = useEventStop()

    return (
        <div className="flex items-center gap-1" onClick={stopEvent}>
            <TippyPopover content={<BundlesSelector rssData={rssData} updateRssBundle={updateRssBundle} />} props={{
                trigger: 'click'
            }}>
                {rssData?.bundle ? <div className="badge badge-primary badge-xs badge-outline p-2">{rssData.bundle?.title}</div> :
                    <div className='hover:border-primary hover:text-primary group badge badge-xs p-2 flex items-center gap-1'>
                        <CardStackPlusIcon className="size-4 text-gray-600 group-hover:text-primary" />
                        Add to bundle
                    </div>}
            </TippyPopover>
        </div>
    )
}