import BundlesHeader from "./components/header/bundles-header";
import BundleContent from "./components/content/content";
import NewBundleButton from "./components/new-bundle/new-bundle-button";
import useBundles from "./hooks/use-bundles";
import { auth } from "@/auth";
import NoData from "./components/content/no-data";
import ManagementRoot from "@/app/components/root/management-root";

export default async function Bundles() {
    const session = await auth()
    const { getBundles } = useBundles()
    const result = await getBundles({
        userId: session?.user?.id!,
        pageSize: 90,
        page: 1
    })

    return (
        <ManagementRoot header={
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Bundles
                    {result.total > 0 && <span className="text-gray-500 ml-1.5">({result.total})</span>}</h1>
                <NewBundleButton />
            </div>
        }>
            {result.total === 0 ? <NoData /> :
                <>
                    <BundlesHeader />
                    <BundleContent bundles={result.result} />
                </>
            }
        </ManagementRoot>
    )
}