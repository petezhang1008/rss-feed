'use client';
import useFormatElement from "../hooks/use-format-element"
import MatchItem from "./match-item"

export default function MatchingEntries() {

    const selectedNodes = useFormatElement()

    return (
        <div className="matching-entries p-4 overflow-y-auto overflow-x-hidden gap-2">
            <p className="text-xs text-gray-600">Matching entries</p>
            <div className="flex flex-col gap-2 mt-2">
                { selectedNodes.map((item, index) => (
                    <MatchItem key={index} data={item}></MatchItem>
                ))}
            </div>
        </div>
    )
}