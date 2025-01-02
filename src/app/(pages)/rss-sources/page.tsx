import RssSuggestion from "./components/rss-suggestion";
import { useCategory } from "@/app/components/home/hooks/server/use-category";
import Footer from "@/app/components/home/footer/footer";
import Banner from "./components/banner";
import HomeRoot from "@/app/components/root/home-root";

export default async function Rss() {
    const { getCategories } = useCategory()
    const categories = await getCategories()
    return (
        <HomeRoot>
            <Banner />
            <RssSuggestion categories={categories} />
            <Footer />
        </HomeRoot>
    )
}