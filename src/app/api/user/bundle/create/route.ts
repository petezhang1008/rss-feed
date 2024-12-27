import { auth } from "@/auth";
import { injectService } from "@/inversify.config";
import { sendJsonResponse } from "@/lib/http-server";
import { BundleService } from "@/services/prisma/bundle-service";
import { Bundle } from "@/types/model";

export async function POST(request: Request) {
    const session = await auth()
    const bundleService = injectService<BundleService>(BundleService)
    const data = await request.json()
    if (!session?.user?.id) return sendJsonResponse(null, { status: 401 })
    const result = await bundleService?.createBundle({
        ...data,
        userId: session?.user?.id ?? ''
    })
    return sendJsonResponse<Bundle>(result)
}