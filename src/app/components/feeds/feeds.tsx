import FeedItem from "./feed-item";

export default function Feeds() {
    return (
        <div className="flex-1 overflow-hidden grow">
            <div className="flex flex-col bg-white rounded shadow-sm">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <FeedItem key={item} />
                ))}
            </div>
        </div>
    )
}