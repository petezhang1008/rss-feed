import HomeRoot from "@/app/components/root/home-root";
import FeedListPreview from "./components/feed-list-preview";
import IframePreview from "./components/iframe-preview";
import PreviewFooter from "./components/preview-footer";
import PreviewHeader from "./components/preview-header";

export default function WebsitePreview() {
    return (
        <HomeRoot>
            <div className="flex size-full overflow-hidden">
                <div className="flex flex-col grow">
                    <PreviewHeader></PreviewHeader>
                    <IframePreview></IframePreview>
                </div>
                <div className="flex flex-col overflow-hidden w-1/4">
                    <FeedListPreview></FeedListPreview>
                    <PreviewFooter></PreviewFooter>
                </div>
            </div>
        </HomeRoot>
    )
}