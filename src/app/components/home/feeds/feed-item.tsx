import Image from "next/image";

export default function FeedItem() {
    return (
        <div className="flex p-3 gap-3 flex-none hover:bg-gray-100 cursor-pointer border-b border-gray-100">
            <div className="left-details flex flex-col gap-1">
                <h1 className="text-lg font-bold shrink-0">自己没有价值之前，少去谈人情世故</h1>
                <div className="flex grow truncate">
                    <p className="text-sm text-gray-500">昨天和几个网友在群里聊天，一个网友说最近公司辞退了一个人，原因就是太菜了</p>
                </div>
                <div className="flex items-center gap-2 gap-3 text-xs text-gray-400 shrink-0">
                    <span>www.baidu.com</span>
                    <span>updated 2024-01-01 </span>
                    <span>published 2024-01-01</span>
                </div>
            </div>
            <div className="right-image">
                <Image src="/images/feed-item.png" alt="feed-item" width={100} height={100} />
            </div>
        </div>
    )
}