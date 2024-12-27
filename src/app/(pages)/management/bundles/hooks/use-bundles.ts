import { injectService } from "@/inversify.config";
import { QueryBundlePaginationParams } from "@/models/bundle-model";
import { BundleService } from "@/services/prisma/bundle-service";

export default function useBundles() {
    const bundleService = injectService<BundleService>(BundleService)

    function getBundles(params: QueryBundlePaginationParams) {
        return bundleService.getBundles(params)
    }

    return {
        getBundles
    }
}