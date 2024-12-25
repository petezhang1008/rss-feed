// import Advertise from "./advertise";
import { GetLatestFeedCountData } from "@/models/feed-model";
import SuggestRss from "./suggest-rss";
import TaskStatus from "./task-status";
import { Rss } from "@/types/model";

export default function Suggestions({ feedCountData, favoriteRssList }: { feedCountData: GetLatestFeedCountData, favoriteRssList: Rss[] }) {
    return (
        <div className="w-64 flex flex-col gap-4">
            <TaskStatus feedCountData={feedCountData} />
            <SuggestRss favoriteRssList={favoriteRssList} />
            {/* <Advertise /> */}
        </div>
    )
}