import { useState } from "react";
import useBundleStore from "../stores/use-bundle-store";
import { httpClient } from "@/lib/http-client";
import { Bundle, RssGenerator } from "@prisma/client";

export default function useBundlesSelector() {
    const setBundles = useBundleStore((state) => state.setBundles)
    const bundles = useBundleStore((state) => state.bundles)
    const addBundle = useBundleStore((state) => state.addBundle)

    async function initBundles() {
        if (bundles.length > 0) return
        const result = await httpClient.get<Bundle[]>('/bundle')
        setBundles(result.data)
    }

    const [search, setSearch] = useState('')

    const filteredBundles = bundles.filter((bundle) => bundle.title.toLowerCase().includes(search.toLowerCase()))

    async function selectBundle(bundle: Bundle, rss: RssGenerator) {
        const result = await httpClient.put<Bundle>('/rss-generator/bundle', {
            id: rss.id,
            bundleId: bundle.id
        })
        return result.data
    }

    async function createBundle(title: string) {
        const result = await httpClient.post<Bundle>('/bundle/create', {
            title
        })
        addBundle(result.data)
        return result.data
    }


    return {
        initBundles,
        filteredBundles,
        search,
        setSearch,
        selectBundle,
        createBundle
    }
}