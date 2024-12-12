'use client'
import Header from "@/app/components/home/header/header";
import FeedListPreview from "./components/feed-list-preview";
import IframePreview from "./components/iframe-preview";
import PreviewFooter from "./components/preview-footer";
import PreviewHeader from "./components/preview-header";
import useSelectedNodesStore from "./store/use-selected-nodes";
import { useEffect } from "react";


export default function WebsitePreview() {
    const clearSelectedNodes = useSelectedNodesStore(state => state.clearSelectedNodes)

    useEffect(() => {
        clearSelectedNodes()
    }, [])

    return (
        <div className="flex flex-col w-full h-full overflow-hidden">
            <Header />
            <div className="flex w-full h-full overflow-hidden">
                <div className="flex flex-col grow">
                    <PreviewHeader></PreviewHeader>
                    <IframePreview></IframePreview>
                </div>
                <div className="flex flex-col overflow-hidden w-1/4">
                    <FeedListPreview></FeedListPreview>
                    <PreviewFooter></PreviewFooter>
                </div>
            </div>
        </div>
    )
}