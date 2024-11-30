import MatchItem from "./match-item"

export default function MatchingEntries() {
    return (
        <div className="matching-entries p-4 overflow-y-auto overflow-x-hidden gap-2">
            <p className="text-xs text-gray-600">Matching entries</p>
            <div className="flex flex-col gap-2">
                { [1, 2, 3, 4, 5].map((item, index) => (
                    <MatchItem key={index} data={item}></MatchItem>
                ))}
            </div>
        </div>
    )
}