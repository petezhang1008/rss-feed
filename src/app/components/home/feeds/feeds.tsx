import { Feed } from "@prisma/client";
import FeedItem from "./feed-item";

export default function Feeds({ feeds }: { feeds: Feed[] }) {
    return (
        <div className="flex-1 overflow-hidden grow">
            <div className="flex flex-col bg-white rounded shadow-sm">
                {feeds.map((feed) => (
                    <FeedItem key={feed.id} feed={feed} />
                ))}
            </div>
        </div>
    )
}