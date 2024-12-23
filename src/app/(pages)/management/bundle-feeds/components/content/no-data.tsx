import Image from "next/image"
import noDataImage from "@/app/assets/images/no_data.png"
import { CardStackPlusIcon } from "@radix-ui/react-icons"

export function NoData() {
    return <div className="flex justify-center items-center h-full flex-col gap-8">
        <Image src={noDataImage} alt="No data" width={160} height={160} />
        <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold">No data</h1>
            <p className="text-gray-500">This bundle has no data, please add some feeds to it.</p>
            <button className="btn btn-outline btn-sm btn-primary mt-2">
                <CardStackPlusIcon className="size-4" />
                Add feed
            </button>
        </div>
    </div>
}