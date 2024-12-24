'use client'
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BundleItem from "./bundle-item";
import useBundlesSelector from "../../hooks/use-bundles-selector";
import { useEffect, useState } from "react";
import ListSkeleton from "@/app/components/skeleton/list-skeleton";
import { Bundle, UserRssWithRssAndBundle } from "@/types/model";

export default function BundlesSelector({ rssData, updateRssBundle }: { rssData: UserRssWithRssAndBundle, updateRssBundle: (bundle: Bundle | null) => void }) {
    const { initBundles, filteredBundles, search, setSearch, createBundle, updateRssBundleApi, isLoading } = useBundlesSelector()
    const [localBundle, setLocalBundle] = useState<Bundle | null>(rssData?.bundle)

    useEffect(() => {
        initBundles()
    }, [])

    async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const bundle = await createBundle(search)
            setSearch('')
            updateRssBundleApi(bundle, rssData!)
            updateRssBundle(bundle)
        }
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    function handleSelectBundle(bundle: Bundle | null) {
        setLocalBundle(bundle)
        updateRssBundleApi(bundle, rssData!)
        updateRssBundle(bundle)
    }

    return (
        <div className="flex flex-col gap-3 p-2 w-60">
            <div>
                <input type="text"
                    placeholder="Search or create new"
                    value={search}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    className="input input-bordered w-full max-w-xs input-sm" />
            </div>
            <hr />
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                {isLoading && <ListSkeleton />}
                {!isLoading && filteredBundles.length === 0 && !search && <div className="text-center text-gray-500">No bundles found</div>}
                {!isLoading && filteredBundles.length === 0 && search && <div className="text-center text-gray-500">Enter to create new bundle</div>}
                {!isLoading && filteredBundles.map((bundle) => <BundleItem
                    key={bundle.id}
                    bundle={bundle}
                    currentBundle={localBundle}
                    selectBundle={handleSelectBundle} />)}
            </div>
            <hr />
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-1 py-2">
                <span><CardStackPlusIcon className="size-4 text-primary" /></span>
                <span className="text-primary">Create bundle</span>
            </div>
        </div>)
}