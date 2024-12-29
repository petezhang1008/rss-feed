import { useDayjs } from "@/app/hooks/use-dayjs";
import { Rss } from "@/types/model";
import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RssCreated({ rss }: { rss: Rss }) {
    const { formatDateToMMDDYYYY } = useDayjs()
    return (
        <div className="flex flex-col gap-2 px-2">
            <h1 className="font-semibold flex items-center gap-1 flex-wrap">
                <span>Created via</span>
                <span className="border border-gray-200 rounded-md px-2 bg-gray-100">{rss.type}</span>
                <span>on</span>
                <span>{formatDateToMMDDYYYY(rss.createdAt)}</span>
            </h1>
            <div className="text-gray-500 text-sm flex items-center gap-1">
                <Link href={rss.website} target="_blank" className="flex items-center gap-1 hover:text-blue-700 hover:underline">
                    <Link2Icon className="size-4 shrink-0" />
                    <span>{rss.website}</span>
                </Link>
            </div>
        </div>
    )
}