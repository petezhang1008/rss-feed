"use client"
import { RssGeneratorType } from "@/enums/rss";
import RssBuilder from "./rss-builder"
import RssTip from "./rss-tip"
import RssGenerator from "./rss-generator";
import RssTypeSwitcher from "./rss-type-switcher";
import { createContext, useState } from "react";

interface RssTypeContextType {
    rssType: RssGeneratorType;
    setRssType: (type: RssGeneratorType) => void;
}

export const RssTypeContext = createContext<RssTypeContextType>({
    rssType: RssGeneratorType.RSS,
    setRssType: () => { }
});

export default function RssContent() {
    const [rssType, setRssType] = useState<RssGeneratorType>(RssGeneratorType.RSS);
    return (
        <RssTypeContext.Provider value={{ rssType, setRssType }} >
            <div className="flex items-center justify-center py-10 overflow-auto flex-col gap-8 shrink-0">
                <RssTip />
                <RssTypeSwitcher />
                {rssType === RssGeneratorType.RSS ? <RssGenerator /> : <RssBuilder />}
            </div>
        </ RssTypeContext.Provider>
    )
}