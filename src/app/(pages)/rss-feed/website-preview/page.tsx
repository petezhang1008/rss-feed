import FeedListPreview from "./components/feed-list-preview";
import IframePreview from "./components/iframe-preview";


export default function WebsitePreview() {
    return (
        <div className="flex w-full h-full">
            <IframePreview></IframePreview>
            <FeedListPreview></FeedListPreview>
        </div>
    )
}