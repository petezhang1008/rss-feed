import Footer from "@/app/components/home/footer/footer";
import BlogContent from "./components/blog-content";
import Banner from "./components/banner";
import HomeRoot from "@/app/components/root/home-root";

export default function BlogPage() {
    return (
        <HomeRoot>
            <Banner />
            <BlogContent />
            <Footer />
        </HomeRoot>
    )
}