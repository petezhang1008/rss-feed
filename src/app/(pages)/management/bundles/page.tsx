import ManagementHeader from "@/app/components/management/header/header";
import BundlesHeader from "./components/header/bundles-header";
import BundleContent from "./components/content/content";
import { RouterName } from "@/enums/router";
import Link from "next/link";

export default function Bundles() {
    return (
        <div className="flex flex-col size-full">
            <ManagementHeader>
                <div className="flex items-center justify-between">
                    <h1>Bundles</h1>
                    <Link href={RouterName.RSS_BUILDER}>
                        <button className="btn btn-sm btn-primary">New Bundle</button>
                    </Link>
                </div>
            </ManagementHeader>
            <div className="p-4 gap-4 flex flex-col">
                <BundlesHeader />
                <BundleContent />
            </div>
        </div>
    )
}