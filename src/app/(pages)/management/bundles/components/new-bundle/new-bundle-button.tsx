'use client'
import { useState } from "react";
import NewBundleModal from "./new-bundle-modal";

export default function NewBundleButton() {
    const [isOpen, setIsOpen] = useState(false)

    function openNewBundleModal() {
        setIsOpen(true)
    }

    function closeNewBundleModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <button onClick={openNewBundleModal} className="btn btn-sm btn-primary">New Bundle</button>
            {<NewBundleModal isOpen={isOpen} onClose={closeNewBundleModal} />}
        </div>
    )
}