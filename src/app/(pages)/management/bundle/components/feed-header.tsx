import { Bundle } from "@prisma/client"

export default function FeedHeader({ bundleDetail }: { bundleDetail: Bundle }) {

    if (!bundleDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex items-center gap-3">
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