"use client"
import { useDayjs } from "@/app/hooks/use-dayjs"

export function DateTag({ date }: { date: Date }) {
    const { dayjs } = useDayjs()
    return <span className="text-gray-400 text-xs">{dayjs(date).fromNow()}</span>
}