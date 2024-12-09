import ManagementHeader from "@/app/components/management/header/header";
import BundlesHeader from "./components/header/bundles-header";
import BundleContent from "./components/content/content";
import NewBundleButton from "./components/new-bundle/new-bundle-button";
import useBundles from "./hooks/use-bundles";
import { auth } from "@/auth";

export default async function Bundles() {
    const session = await auth()
    const { getBundles } = useBundles()
    const result = await getBundles({
        userId: session?.user.id!,
        pageSize: 50,
        page: 1
    })

    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Bundles ({result.total})</h1>
                    <NewBundleButton />
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                <BundlesHeader />
                <BundleContent bundles={result.result} />
            </div>
        </div>
    )
}