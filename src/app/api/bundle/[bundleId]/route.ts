import { injectService } from "@/inversify.config"
import { sendJsonResponse } from "@/lib/http-server"
import { BundleService } from "@/services/bundle-service"

export async function GET(request: Request, { params }: { params: { bundleId: string } }) {
    const bundleService = injectService<BundleService>(BundleService)
    const bundleId = params.bundleId
    const bundle = await bundleService?.getBundleById(bundleId)
    return sendJsonResponse(bundle)
}

export async function DELETE(request: Request, { params }: { params: { bundleId: string } }) {
    const bundleService = injectService<BundleService>(BundleService)
    const bundleId = params.bundleId
    const bundle = await bundleService?.deleteBundle(bundleId)
    return sendJsonResponse(bundle)
}

export async function PUT(request: Request, { params }: { params: { bundleId: string } }) {
    const bundleService = injectService<BundleService>(BundleService)
    const bundleId = params.bundleId
    const bundle = await bundleService?.updateBundle(bundleId, await request.json())
    return sendJsonResponse(bundle)
}