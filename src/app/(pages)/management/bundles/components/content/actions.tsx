import { useBundleAction } from "@/app/(pages)/management/bundles/hooks/use-bundle-action"
import { Bundle } from "@prisma/client"

export default function Actions({ bundle }: { bundle: Bundle }) {
    const { deleteBundle, editBundle } = useBundleAction()

    const handleDeleteBundle = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        await deleteBundle(bundle?.id!)
    }

    const handleEditBundle = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        await editBundle(bundle)
    }

    return (
        <div className="flex flex-col gap-0.5">
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleEditBundle}>Edit</div>
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleDeleteBundle}>Delete</div>
        </div>
    )
}