import ContainerSelector from "./container-selector";
import MatchingEntries from "./matching-entries";

export default function FeedListPreview() {
    return (
        <div className="h-full flex w-2/6 border-l border-gray-200 flex-col overflow-hidden">
            <ContainerSelector></ContainerSelector>
            <MatchingEntries></MatchingEntries>
        </div>
    )
}