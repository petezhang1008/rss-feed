import Footer from "@/app/components/home/footer/footer";
import Header from "@/app/components/home/header/header";

export default function BlogPage() {
    return (
        <div className="flex flex-col size-full">
            <Header />
            <div className="flex-1">
                <h1>Blog</h1>
            </div>
            <Footer />
        </div>
    )
}