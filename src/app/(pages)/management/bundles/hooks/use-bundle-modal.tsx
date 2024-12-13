'use client'
import { MySwal } from "@/lib/sweet-alert";
import NewBundleContent from "../components/new-bundle/new-bundle-content";
import { redirect } from "next/navigation";
import { RouterName } from "@/enums/router";
import useCreateBundle, { BundleData } from "./use-create-bundle";
import { create } from "zustand";
import useToast from "@/app/hooks/use-toast";

const useBundleStore = create<{
    bundleData: BundleData
    setBundleData: (bundleData: BundleData) => void
}>((set) => ({
    bundleData: {
        title: '',
        description: ''
    },
    setBundleData: (bundleData) => set({ bundleData })
}))


export default function useBundleModal() {
    const setBundleData = useBundleStore((state) => state.setBundleData)
    function handleDataChange(data: BundleData) {
        setBundleData(data)
    }

    const { toast } = useToast()

    function openNewBundleModal() {
        return MySwal.fire({
            title: <NewBundleContent handleDataChange={handleDataChange} />,
            showCloseButton: true,
            showCancelButton: true,
            // confirmButtonColor: '#d33',
            confirmButtonText: 'Create Bundle',
        }).then((result) => {
            const bundleData = useBundleStore.getState().bundleData
            if (result.isConfirmed) {
                if (!bundleData.title) return
                const { createBundleApi } = useCreateBundle()
                createBundleApi(bundleData).then(() => {
                    toast.success('Bundle created successfully')
                    redirect(RouterName.BUNDLES)
                })
            }
        })
    }
    return {
        openNewBundleModal
    }
}