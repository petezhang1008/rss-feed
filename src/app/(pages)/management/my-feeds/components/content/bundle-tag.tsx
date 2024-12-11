'use client'
import { Bundle } from "@prisma/client";

export default function BundleTag({ bundle }: { bundle: Bundle }) {
    return <div className="badge badge-primary">{bundle.title}</div>
}