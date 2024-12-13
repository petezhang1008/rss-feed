import { deleteAlert } from "@/app/components/common/delete-alert"
import useToast from "@/app/hooks/use-toast"
import { RouterName } from "@/enums/router"
import { httpClient } from "@/lib/http-client"
import { Bundle } from "@prisma/client"
import { redirect } from "next/navigation"

export function useBundleAction() {
    const { toast } = useToast()
    const deleteBundleApi = async (id: string) => {
        const res = await httpClient.delete(`/bundle/${id}`)
        return res
    }

    const editBundleApi = async (id: string, data: Bundle) => {
        const res = await httpClient.put(`/bundle/${id}`, { data })
        return res
    }

    async function deleteBundle(id: string) {
        const res = await deleteAlert()
        if (res.isConfirmed) {
            const res = await deleteBundleApi(id)
            if (res) {
                toast.success('Bundle deleted successfully')
                redirect(RouterName.BUNDLES)
            }
        }
    }

    async function editBundle(id: string, bundleData: Bundle) {
        const res = await editBundleApi(id, bundleData)
        if (res) {
            toast.success('Bundle updated successfully')
            redirect(RouterName.BUNDLES)
        }
    }

    return {
        deleteBundleApi,
        editBundleApi,
        deleteBundle,
        editBundle
    }
}
