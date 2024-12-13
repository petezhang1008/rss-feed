"use client"
import { Bundle } from "@prisma/client";
import { TrashIcon, Pencil1Icon, DotsVerticalIcon, CounterClockwiseClockIcon, CardStackPlusIcon } from "@radix-ui/react-icons"
import { useBundleAction } from "../../../bundles/hooks/use-bundle-action";
import { RssList } from "./rss-list";
import BundleCustomize from "./bundle-customize";
import BundleFeeds from "./bundle-feeds";
import BundleUpdated from "./bundle-updated";
export default function BundleInfo({ bundle }: { bundle: Bundle }) {


    return (
        <div className="flex flex-col gap-4 w-80 pt-4">
            <BundleCustomize bundle={bundle} />
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
                <h1 className="font-semibold">Description</h1>
                <div className="text-gray-500 text-sm">{bundle.description || 'No description'}</div>
            </div>
            <BundleUpdated bundle={bundle} />
            <BundleFeeds bundle={bundle} />
        </div>
    )
}