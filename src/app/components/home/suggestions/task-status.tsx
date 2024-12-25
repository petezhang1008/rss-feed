import { RouterName } from "@/enums/router";
import Link from "next/link";
import { GetLatestFeedCountData } from "@/models/feed-model";

export default function TaskStatus({ feedCountData }: { feedCountData: GetLatestFeedCountData }) {
    return (
        <div className="bg-white rounded shadow-sm p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h4 className="text-md font-semibold text-normal text-neutral-700">Rss Feeds Status</h4>
                <p className="text-sm text-gray-700 flex flex-wrap gap-1">
                    <span className="font-bold text-primary font-bold">{feedCountData.feedCount}</span>
                    <span>updates were received from</span>
                    <span className="font-bold text-primary font-bold">{feedCountData.rssCount}</span>
                    <span>rss feeds, Today.</span>
                </p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Link href={RouterName.RSS_BUILDER} className="btn btn-primary btn-sm w-full btn-outline">Create Your Own Feed</Link>
            </div>
        </div>
    )
}