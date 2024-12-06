'use client';
import { RssGeneratorType } from "@/enums/rss";
import useWebsiteLink from "../hooks/use-website-link";
import useNodePathStore from "../store/use-node-path";
import useSelectedNodesStore from "../store/use-selected-nodes"
import { subscribeWebsiteAction } from "@/app/lib/subscribe-actions"
import { redirect } from 'next/navigation';
import { RouterName } from "@/enums/router";

export default function PreviewFooter() {
    const selectedNodes = useSelectedNodesStore(state => state.selectedNodes)
    const websiteLink = useWebsiteLink()
    const path = useNodePathStore(state => state.path)


    async function submit() {
        if (!websiteLink || !path) return
        const res = await subscribeWebsiteAction({
            type: RssGeneratorType.WEBSITE,
            website: websiteLink,
            selector: path,
            frequency: "daily",
        })
        redirect(`${RouterName.FEED}/${res.id}`)
    }

    const disabled = !websiteLink || !path

    return (
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-primary font-semibold"> {selectedNodes?.length || 0} Nodes Selected </div>
            <button className="btn btn-sm btn-primary" disabled={disabled} onClick={submit}>Generate</button>
        </div>
    )
}