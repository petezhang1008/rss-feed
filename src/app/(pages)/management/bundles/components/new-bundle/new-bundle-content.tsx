'use client'
import { useState } from "react"
import { BundleData } from "../../hooks/use-create-bundle"

export default function NewBundleContent({ handleDataChange }: { handleDataChange: (data: BundleData) => void }) {

    const [bundleData, setBundleData] = useState<BundleData>({
        title: '',
        description: ''
    })

    function handleBundleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const data = {
            ...bundleData,
            title: e.target.value
        }
        setBundleData(data)
        handleDataChange(data)
    }

    function handleBundleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        const data = {
            ...bundleData,
            description: e.target.value
        }
        setBundleData(data)
        handleDataChange(data)
    }


    return (
        <div className="size-full font-normal">
            <h3 className="font-bold text-lg text-left text-gray-800">New Bundle</h3>
            <div className="flex flex-col gap-4 mt-4">
                <label className="input input-bordered text-gray-600 flex items-center gap-2">
                    Title
                    <input type="text" className="grow" placeholder="Type Bundle Title" onChange={handleBundleTitleChange} />
                </label>
                <label className="input input-bordered text-gray-600 flex items-center gap-2">
                    Description
                    <input type="text" className="grow" placeholder="Type Bundle Description" onChange={handleBundleDescriptionChange} />
                </label>
            </div>
        </div>
    )
}