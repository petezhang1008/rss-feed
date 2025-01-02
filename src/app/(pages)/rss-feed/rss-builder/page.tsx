import RssContent from "./components/rss-content";
import Footer from "@/app/components/home/footer/footer";
import HomeRoot from "@/app/components/root/home-root";

export default async function Rss() {
    return (
        <HomeRoot>
            <RssContent />
            <Footer />
        </HomeRoot>
    )
}