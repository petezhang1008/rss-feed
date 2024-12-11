import { injectService } from "@/inversify.config"
import { BundleService } from "@/services/bundle-service"

export default function useRssDetail() {
    const bundleService = injectService<BundleService>(BundleService)

    function getBundleDetail(id: string) {
        return bundleService.getBundleById(id)
    }
    return {
        getBundleDetail
    }
}