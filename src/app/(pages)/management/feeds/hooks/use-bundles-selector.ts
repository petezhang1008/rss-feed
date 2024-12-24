import { useState } from "react";
import useBundleStore from "../stores/use-bundle-store";
import { httpClient } from "@/lib/http-client";
import { UserRss, Bundle } from "@/types/model";

export default function useBundlesSelector() {
    const setBundles = useBundleStore((state) => state.setBundles)
    const bundles = useBundleStore((state) => state.bundles)
    const addBundle = useBundleStore((state) => state.addBundle)
    const [isLoading, setIsLoading] = useState(false)

    async function initBundles() {
        if (bundles.length > 0) return
        setIsLoading(true)
        const result = await httpClient.get<Bundle[]>('/user/bundle')
        setBundles(result.data)
        setIsLoading(false)
    }

    const [search, setSearch] = useState('')

    const filteredBundles = bundles.filter((bundle) => bundle.title.toLowerCase().includes(search.toLowerCase()))

    async function updateRssBundleApi(bundle: Bundle | null, rss: UserRss) {
        const result = await httpClient.put<Bundle>(`/user/rss/${rss.id}`, {
            bundleId: bundle?.id || null
        })
        return result.data
    }

    async function createBundle(title: string) {
        const result = await httpClient.post<Bundle>('/user/bundle/create', {
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
        updateRssBundleApi,
        createBundle,
        isLoading
    }
}