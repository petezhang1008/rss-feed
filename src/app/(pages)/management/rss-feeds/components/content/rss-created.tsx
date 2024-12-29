import { useDayjs } from "@/app/hooks/use-dayjs";
import { RssGeneratorType } from "@/enums/rss";
import { UserRssWithRssAndBundle } from "@/types/model";
import { Link2Icon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RssCreated({ rssDetail }: { rssDetail: UserRssWithRssAndBundle }) {
    const { formatDateToMMDDYYYY } = useDayjs()
    return (
        <div className="flex flex-col gap-2 px-2">
            <h1 className="font-semibold flex items-center gap-1 flex-wrap">
                <span>Created via</span>
                <span className="border border-gray-200 rounded-md px-2 bg-gray-100">{rssDetail.rss.type}</span>
                <span>on</span>
                <span>{formatDateToMMDDYYYY(rssDetail.createdAt)}</span>
            </h1>
            <div className="text-gray-500 text-sm flex items-center gap-1">
                <Link href={rssDetail.rss.website} target="_blank" className="flex items-center gap-1 hover:text-blue-700 hover:underline">
                    <Link2Icon className="size-4 shrink-0" />
                    <span>{rssDetail.rss.website}</span>
                </Link>
            </div>
            {
                rssDetail.rss.type === RssGeneratorType.WEBSITE &&
                <button className="btn btn-sm !h-7 !min-h-7 mt-2">
                    <Pencil1Icon className="size-4" />
                    Update Builder Rules
                </button>
            }
        </div>
    )
}