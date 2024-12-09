import { httpClient } from "@/lib/http-client";
import { useState } from "react";

type Bundle = {
    title: string
    description: string
}
export default function useCreateBundle() {

    const [bundleTitle, setBundleTitle] = useState<string>()
    const [bundleDescription, setBundleDescription] = useState<string>()

    async function createBundle(bundle: Bundle) {
        return httpClient.post('/bundle/create', {
            ...bundle,
        })
    }

    return {
        bundleTitle,
        bundleDescription,
        setBundleTitle,
        setBundleDescription,
        createBundle
    }
}