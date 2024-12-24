import { useContext } from "react";
import { RssTypeContext } from "./rss-content";
import { RssGeneratorType } from "@/enums/rss";

export default function RssTip() {
    const { rssType } = useContext(RssTypeContext);
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-3xl font-bold text-primary">Create RSS Feeds</h1>
            {rssType === RssGeneratorType.RSS ?
                <h2 className="text-3xl font-bold text-gray-700">from almost any webpage</h2> :
                <h2 className="text-3xl font-bold text-gray-700">with RSS Builder</h2>}

        </div>
    )
}