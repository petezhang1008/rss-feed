'use client'
import { redirect } from "next/navigation"
import useCreateBundle from "../../hooks/use-create-bundle"
import { RouterName } from "@/enums/router"

export default function NewBundleModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { createBundle, bundleTitle, bundleDescription, setBundleTitle, setBundleDescription } = useCreateBundle()

    function handleCreateBundle() {
        if (!bundleTitle || !bundleDescription) return
        createBundle({
            title: bundleTitle,
            description: bundleDescription
        }).then(() => {
            onClose()
            redirect(RouterName.BUNDLES)
        })
    }

    function handleBundleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBundleTitle(e.target.value)
    }

    function handleBundleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBundleDescription(e.target.value)
    }

    function handleCloseModal() {
        setBundleTitle(undefined)
        setBundleDescription(undefined)
        onClose()
    }

    return (
        <dialog id="NewBundleModal" className="modal" open={isOpen} onClose={onClose}>
            <div className="modal-backdrop bg-black/50"></div>
            <div className="modal-box w-1/3 max-w-5xl">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">New Bundle</h3>
                <div className="flex flex-col gap-4 mt-4">
                    <label className="input input-bordered text-gray-600 flex items-center gap-2">
                        Title
                        <input type="text" className="grow" placeholder="Type Bundle Title" value={bundleTitle} onChange={handleBundleTitleChange} />
                    </label>
                    <label className="input input-bordered text-gray-600 flex items-center gap-2">
                        Description
                        <input type="text" className="grow" placeholder="Type Bundle Description" value={bundleDescription} onChange={handleBundleDescriptionChange} />
                    </label>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm">Close</button>
                        <button className="btn btn-sm btn-primary ml-2" onClick={handleCreateBundle}>Save</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}