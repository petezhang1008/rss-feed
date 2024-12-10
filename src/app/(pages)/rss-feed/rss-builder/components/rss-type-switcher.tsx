"use client"
import { MagicWandIcon, Crosshair1Icon } from "@radix-ui/react-icons"
import { RssGeneratorType } from "@/enums/rss";
import clsx from "clsx";
import { useContext } from "react";
import { RssTypeContext } from "./rss-content";

export default function RssTypeSwitcher() {
    const { rssType, setRssType } = useContext(RssTypeContext);

    return (
        <div role="tablist" className="tabs tabs-boxed">
            <a role="tab" className={clsx("tab flex items-center gap-3 px-8", rssType === RssGeneratorType.RSS && "tab-active")}
                onClick={() => setRssType(RssGeneratorType.RSS)}>
                <Crosshair1Icon className="size-4" />
                <span>RSS Generator</span>
            </a>
            <a role="tab" className={clsx("tab flex items-center gap-3 px-8", rssType === RssGeneratorType.WEBSITE && "tab-active")}
                onClick={() => setRssType(RssGeneratorType.WEBSITE)}>
                <MagicWandIcon className="size-4" />
                <span>RSS Builder</span>
            </a>
        </div>
    )
}