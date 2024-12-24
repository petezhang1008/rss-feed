import Header from "@/app/components/home/header/header";
import RssContent from "./components/rss-content";
import RssSuggestion from "./components/rss-suggestion";
import { useCategory } from "@/app/components/home/hooks/server/use-category";

export default async function Rss() {
    const { getCategories } = useCategory()
    const categories = await getCategories()
    return (
        <div className="flex flex-col size-full">
            <Header />
            <RssContent />
            <RssSuggestion categories={categories} />
        </div>
    )
}