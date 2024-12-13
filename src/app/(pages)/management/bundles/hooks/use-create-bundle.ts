import { httpClient } from "@/lib/http-client";

export type BundleData = {
    title: string
    description: string
}
export default function useCreateBundle() {

    async function createBundleApi(bundle: BundleData) {
        return httpClient.post('/bundle/create', {
            ...bundle,
        })
    }

    return {
        createBundleApi
    }
}