import { CardStackPlusIcon } from "@radix-ui/react-icons";
import { RssList } from "./rss-list";
import { Bundle } from "@prisma/client";
import { useDayjs } from "@/app/hooks/use-dayjs";

export default function BundleFeeds({ bundle }: { bundle: Bundle }) {
    const { formatDateToMMDDYYYY } = useDayjs()
    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold no-wrap">
                <span>Created via on</span>
                <span className="px-1">{formatDateToMMDDYYYY(bundle.createdAt)}</span>
                <span>from </span>
                <span className="font-semibold text-primary px-1">{bundle?.rssGenerators?.length} </span>
                <span>feeds</span>
            </h1>
            {bundle?.rssGenerators && <div>
                <RssList rssList={bundle?.rssGenerators} />
            </div>}
            <div className="mt-2">
                <button className="btn btn-outline btn-sm btn-primary !h-7 !min-h-7">
                    <CardStackPlusIcon className="size-4" />
                    Add feeds
                </button>
            </div>
        </div>
    )
}