'use client'
import { useBundleAction } from "@/app/(pages)/management/bundles/hooks/use-bundle-action"
import { useEventStop } from "@/app/hooks/use-event-stop"
import { Bundle } from "@prisma/client"

export default function Actions({ bundle }: { bundle: Bundle }) {
    const { deleteBundle, editBundle } = useBundleAction()
    const { stopEvent } = useEventStop()

    const handleDeleteBundle = async (e: React.MouseEvent<HTMLDivElement>) => {
        stopEvent(e)
        await deleteBundle(bundle?.id!)
    }

    const handleEditBundle = async (e: React.MouseEvent<HTMLDivElement>) => {
        stopEvent(e)
        await editBundle(bundle.id, bundle)
    }

    return (
        <div className="flex flex-col gap-0.5">
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleEditBundle}>Edit</div>
            <div className="hover:bg-gray-200 rounded cursor-pointer py-2 px-4" onClick={handleDeleteBundle}>Delete</div>
        </div>
    )
}