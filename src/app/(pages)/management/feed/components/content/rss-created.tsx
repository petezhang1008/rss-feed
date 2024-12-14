import { useDayjs } from "@/app/hooks/use-dayjs";
import { RssGeneratorType } from "@/enums/rss";
import { RssGenerator } from "@prisma/client";
import { Link2Icon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RssCreated({ rss }: { rss: RssGenerator }) {
    const { formatDateToMMDDYYYY } = useDayjs()
    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold flex items-center gap-1">
                <span>Created via</span>
                <span className="border border-gray-200 rounded-md px-2 bg-gray-100">{rss.type}</span>
                <span>on</span>
                <span>{formatDateToMMDDYYYY(rss.createdAt)}</span>
            </h1>
            <div className="text-gray-500 text-sm flex items-center gap-1">
                <Link href={rss.website} target="_blank" className="flex items-center gap-1 hover:text-blue-700 hover:underline">
                    <Link2Icon className="size-4" />
                    <span>{rss.website}</span>
                </Link>
            </div>
            {
                rss.type === RssGeneratorType.WEBSITE &&
                <button className="btn btn-sm !h-7 !min-h-7 mt-2">
                    <Pencil1Icon className="size-4" />
                    Update Builder Rules
                </button>
            }
        </div>
    )
}