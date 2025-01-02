import Header from "@/app/components/home/header/header";
import RssSuggestion from "./components/rss-suggestion";
import { useCategory } from "@/app/components/home/hooks/server/use-category";
import Footer from "@/app/components/home/footer/footer";

export default async function Rss() {
    const { getCategories } = useCategory()
    const categories = await getCategories()
    return (
        <div className="flex flex-col size-full">
            <Header />
            <RssSuggestion categories={categories} />
            <Footer />
        </div>
    )
}