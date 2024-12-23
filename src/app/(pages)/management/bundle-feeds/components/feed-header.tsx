import { RouterName } from "@/enums/router"
import { Bundle } from "@/types/model"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function FeedHeader({ bundleDetail }: { bundleDetail: Bundle }) {

    if (!bundleDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center gap-3">
            <Link href={RouterName.BUNDLES}
                className="flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer py-2 px-0.5 text-semibold" >
                <ChevronLeftIcon className="size-5" />
            </Link>
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                    <span className="text-xs">{bundleDetail?.title?.slice(0, 2)}</span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="text-gray-700 font-bold">{bundleDetail?.title}</p>
                </div>
            </div>
        </div>
    )
}