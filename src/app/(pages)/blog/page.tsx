import Footer from "@/app/components/home/footer/footer";
import Header from "@/app/components/home/header/header";
import BlogContent from "./components/blog-content";
import Banner from "./components/banner";

export default function BlogPage() {
    return (
        <div className="flex flex-col size-full">
            <Header />
            <Banner />
            <BlogContent />
            <Footer />
        </div>
    )
}