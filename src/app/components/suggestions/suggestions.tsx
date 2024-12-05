import Advertise from "./advertise";
import SuggestRss from "./suggest-rss";
import TaskStatus from "./task-status";

export default function Suggestions() {
    return (
        <div className="w-64 flex flex-col gap-4">
            <TaskStatus />
            <SuggestRss />
            <Advertise />
        </div>
    )
}