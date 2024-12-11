'use client'
import { CardStackPlusIcon } from "@radix-ui/react-icons";
import BundleItem from "./bundle-item";
import useBundlesSelector from "../../hooks/use-bundles-selector";
import { useContext, useEffect } from "react";
import { RssItemContext } from "./action-btn";

export default function BundlesSelector() {
    const { initBundles, filteredBundles, search, setSearch, createBundle, selectBundle } = useBundlesSelector()
    const { rssData, updateRssBundle } = useContext(RssItemContext)

    useEffect(() => {
        initBundles()
    }, [])

    async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const bundle = await createBundle(search)
            setSearch('')
            selectBundle(bundle, rssData!)
            updateRssBundle(bundle)
        }
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
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
            <div className="flex flex-col gap-1">
                {filteredBundles.length === 0 && !search && <div className="text-center text-gray-500">No bundles found</div>}
                {filteredBundles.length === 0 && search && <div className="text-center text-gray-500">Enter to create new bundle</div>}
                {filteredBundles.map((bundle) => <BundleItem key={bundle.id} bundle={bundle} />)}
            </div>
            <hr />
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-1 py-2">
                <span><CardStackPlusIcon className="size-4 text-primary" /></span>
                <span className="text-primary">Create bundle</span>
            </div>
        </div>)
}