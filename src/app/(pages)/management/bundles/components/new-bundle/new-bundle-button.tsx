'use client'
import useBundleModal from "../../hooks/use-bundle-modal";

export default function NewBundleButton() {
    const { openNewBundleModal } = useBundleModal()
    return (
        <div>
            <button onClick={openNewBundleModal} className="btn btn-sm btn-primary">New Bundle</button>
        </div>
    )
}