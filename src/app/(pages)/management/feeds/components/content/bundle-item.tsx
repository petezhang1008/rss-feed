'use client'
import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import { Bundle } from "@/types/model";

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

    return <div className={`flex items-center truncate group justify-between gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-1 py-2 ${isSelected ? 'bg-gray-100 text-primary' : ''}`}
        onClick={handleClick}>
        <span>{bundle.title}</span>
        {isSelected && <span>
            <CheckIcon className="size-5 text-primary group-hover:hidden" />
            <TrashIcon className="size-5 text-red-500 hidden group-hover:block" />
        </span>}
    </div>
}
