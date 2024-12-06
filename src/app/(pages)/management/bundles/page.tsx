import ManagementHeader from "@/app/components/management/header/header";
import BundlesHeader from "./components/header/bundles-header";
import BundleContent from "./components/content/content";

export default function Bundles() {
    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <h1>Bundles</h1>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                <BundlesHeader />
                <BundleContent />
            </div>
        </div>
    )
}