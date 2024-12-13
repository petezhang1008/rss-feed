'use client'
import { CheckIcon } from "@radix-ui/react-icons";
import { Bundle } from "@prisma/client";

export default function BundleItem({
    bundle,
    currentBundle,
    selectBundle
}: {
    bundle: Bundle,
    currentBundle: Bundle | null,
    selectBundle: (bundle: Bundle | null) => void
}) {

    const isSelected = currentBundle?.id === bundle.id

    function handleClick() {
        selectBundle(isSelected ? null : bundle)
    }

    return <div className={`flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-1 py-2 ${isSelected ? 'bg-gray-100 text-primary' : ''}`}
        onClick={handleClick}>
        <span>{bundle.title}</span>
        {isSelected && <span><CheckIcon className="size-5 text-primary" /></span>}
    </div>
}
