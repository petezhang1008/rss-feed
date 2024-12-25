import ManagementHeader from "@/app/components/management/header/header";
import BundlesHeader from "./components/header/bundles-header";
import BundleContent from "./components/content/content";
import NewBundleButton from "./components/new-bundle/new-bundle-button";
import useBundles from "./hooks/use-bundles";
import { auth } from "@/auth";
import NoData from "./components/content/no-data";

export default async function Bundles() {
    const session = await auth()
    const { getBundles } = useBundles()
    const result = await getBundles({
        userId: session?.user?.id!,
        pageSize: 90,
        page: 1
    })

    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">My Bundles
                        {result.total > 0 && <span className="text-gray-500 ml-1.5">({result.total})</span>}</h1>
                    <NewBundleButton />
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col size-full">
                {result.total === 0 ? <NoData /> :
                    <>
                        <BundlesHeader />
                        <BundleContent bundles={result.result} />
                    </>
                }
            </div>
        </div>
    )
}