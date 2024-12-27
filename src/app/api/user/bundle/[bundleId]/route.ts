import { auth } from "@/auth"
import { ErrorCode } from "@/enums/error-code"
import { injectService } from "@/inversify.config"
import { sendError, sendJsonResponse } from "@/lib/http-server"
import { ErrorData } from "@/lib/http-server"
import { BundleService } from "@/services/bundle-service"

const bundleService = injectService<BundleService>(BundleService)
export async function GET(request: Request, { params }: { params: Promise<{ bundleId: string }> }) {
    const { bundleId } = await params
    const bundle = await bundleService?.getBundleById(bundleId)
    return sendJsonResponse(bundle)
}

export async function DELETE(request: Request, { params }: { params: Promise<{ bundleId: string }> }) {
    const { bundleId } = await params
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const bundle = await bundleService?.deleteBundle(bundleId, session.user.id)
    return sendJsonResponse(bundle)
}

export async function PUT(request: Request, { params }: { params: Promise<{ bundleId: string }> }) {
    const { bundleId } = await params
    const session = await auth()
    if (!session?.user?.id) {
        return sendError<ErrorData>(400, ErrorCode.NO_USER)
    }
    const bundle = await bundleService?.updateBundle(bundleId, { ...await request.json(), userId: session.user.id })
    return sendJsonResponse(bundle)
}