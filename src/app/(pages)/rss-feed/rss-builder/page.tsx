import Header from "@/app/components/home/header/header";
import RssContent from "./components/rss-content";
import RssSuggestion from "./components/rss-suggestion";

export default function Rss() {
    return (
        <div className="flex flex-col size-full">
            <Header />
            <RssContent />
            <RssSuggestion />
        </div>
    )
}