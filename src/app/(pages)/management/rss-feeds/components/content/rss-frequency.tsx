'use client'
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import { useRssInfo } from "../../hooks/client/use-rss-info";
import { useDayjs } from "@/app/hooks/use-dayjs";
import { useEffect, useState } from "react";
import { Rss, Task } from "@/types/model";

export default function RssFrequency({ rss }: { rss: Rss }) {
    const { formatDateToHHmmMMDD } = useDayjs()
    const { getRssTaskDataApi } = useRssInfo()
    const [taskData, setTaskData] = useState<Task | null>(null)
    useEffect(() => {
        getRssTaskDataApi(rss.id).then(res => {
            setTaskData(res)
        })
    }, [rss])
    return (
        taskData && <div className="flex flex-col gap-2 px-2">
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
                <div className="badge badge-primary text-sm">{rss.frequency}</div>
            </div>
        </div>
    )
}