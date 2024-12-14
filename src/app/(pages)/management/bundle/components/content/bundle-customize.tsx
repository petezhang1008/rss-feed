import { Pencil1Icon, TrashIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useBundleAction } from "../../../bundles/hooks/use-bundle-action";
import { Bundle } from "@prisma/client";

export default function BundleCustomize({ bundle }: { bundle: Bundle }) {
    const { deleteBundle, editBundle } = useBundleAction()

    function handleDeleteBundle() {
        deleteBundle(bundle.id)
    }

    function handleEditBundle() {
        editBundle(bundle.id, bundle)
    }
    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold">Customize</h1>
            <div className="flex gap-4">
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7" onClick={handleEditBundle}>
                    <Pencil1Icon className="size-4" />
                    Edit
                </button>
                <button
                    className="btn btn-outline btn-sm !h-7 !min-h-7 group text-red-600 !border-red-600 hover:bg-red-600 !hover:text-white"
                    onClick={handleDeleteBundle}>
                    <TrashIcon className="size-4 group-hover:text-white !text-red-600" />
                    Delete
                </button>
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                    <DotsVerticalIcon className="size-4" />
                </button>
            </div>
        </div>
    )
}