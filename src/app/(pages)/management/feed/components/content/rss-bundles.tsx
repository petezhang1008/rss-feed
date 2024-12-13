import TippyPopover from "@/app/components/common/tippy-popover";
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BundlesSelector from "../../../my-feeds/components/content/bundles-selector";
import { Bundle, RssGenerator } from "@prisma/client";
import { useState } from "react";

export default function RssBundles({ rss }: { rss: RssGenerator }) {

    const [rssData, setRssData] = useState<RssGenerator>(rss)

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