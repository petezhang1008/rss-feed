'use client'
import { CheckIcon } from "@radix-ui/react-icons";
import { Bundle, RssGenerator } from "@prisma/client";
import useBundlesSelector from "../../hooks/use-bundles-selector";
import { useContext } from "react";
import { RssItemContext } from "./action-btn";

export default function BundleItem({ bundle }: { bundle: Bundle }) {
    const { rssData, updateRssBundle } = useContext(RssItemContext)
    const { selectBundle } = useBundlesSelector()
    function handleClick() {
        if (!rssData) return
        selectBundle(bundle, rssData)
        updateRssBundle(bundle)
    }

    const isSelected = rssData?.bundleId === bundle.id

    return <div className={`flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-1 py-2 ${isSelected ? 'bg-gray-100 text-primary' : ''}`}
        onClick={handleClick}>
        <span>{bundle.title}</span>
        {isSelected && <span><CheckIcon className="size-5 text-primary" /></span>}
    </div>
}
