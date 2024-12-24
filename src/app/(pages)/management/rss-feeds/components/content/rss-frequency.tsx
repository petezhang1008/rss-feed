'use client'
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import { useRssInfo } from "../../hooks/client/use-rss-info";
import { useDayjs } from "@/app/hooks/use-dayjs";
import { useEffect, useState } from "react";
import { UserRss, Task, Rss } from "@/types/model";

export default function RssFrequency({ rssDetail }: { rssDetail: UserRss }) {
    const { formatDateToHHmmMMDD } = useDayjs()
    const { getRssTaskDataApi } = useRssInfo()
    const [taskData, setTaskData] = useState<Task | null>(null)
    useEffect(() => {
        getRssTaskDataApi(rssDetail.rssId).then(res => {
            setTaskData(res)
        })
    }, [rssDetail])
    return (
        taskData && <div className="flex flex-col gap-2 border-b border-gray-200 pb-6 px-2">
            <h1 className="font-semibold">Update Frequency</h1>
            <div className="text-gray-500 text-sm flex items-center gap-2">
                <CounterClockwiseClockIcon className="size-4"></CounterClockwiseClockIcon>
                <span>
                    <span className="font-bold text-primary font-md">{taskData.successCount}</span>
                    <span className="px-1">feeds update at</span>
                    <span>{formatDateToHHmmMMDD(taskData.createAt)}</span>
                </span>
            </div>
            <div>
                <div className="badge badge-primary text-sm">{rssDetail.rss.frequency}</div>
            </div>
        </div>
    )
}