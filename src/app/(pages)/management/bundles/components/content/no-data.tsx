'use client'
import NoDataImage from "@/app/assets/images/bundle-not-found.svg"
import useBundleModal from "../../hooks/use-bundle-modal"

export default function NoData() {
    const { openNewBundleModal } = useBundleModal()

    return <div className="flex flex-col items-center justify-center flex-col gap-8 size-full">
        <div>
            <NoDataImage alt="no-data" className="opacity-70" />
        </div>
        <div className="text-center text-gray-500 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold leading-8 text-blue-600 w-96 text-center">Bundles let you combine multiple feeds into one feed</h1>
            <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={openNewBundleModal}>Create New Bundle</button>
        </div>
    </div>
}