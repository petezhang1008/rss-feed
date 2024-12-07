'use client'
import FeedListPreview from "./components/feed-list-preview";
import IframePreview from "./components/iframe-preview";
import PreviewFooter from "./components/preview-footer";
import PreviewHeader from "./components/preview-header";


export default function WebsitePreview() {
    return (
        <div className="flex w-full h-full flex-col">
            <PreviewHeader></PreviewHeader>
            <div className="grow flex overflow-hidden">
                <IframePreview></IframePreview>
                <FeedListPreview></FeedListPreview>
            </div>
            <PreviewFooter></PreviewFooter>
        </div>
    )
}