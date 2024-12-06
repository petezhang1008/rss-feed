export default function FeedItem({ feed }: any) {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col gap-3 border border-gray-200">
            <div className="title">{feed.title}</div>
            <div><img className="w-full object-cover" src={feed.img} alt="random" /></div>
            <p className="text-gray-500 text-xs leading-5">{feed.desc}</p>
            <div className="flex items-center gap-2 justify-between">
                <div className="badge badge-blue text-gray-500 p-2">{feed.link}</div>
                <div className="text-gray-400 p-2 text-xs">{feed.date}</div>
            </div>
        </div>
    )
}