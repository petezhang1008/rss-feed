import Header from "@/app/components/home/header/header";
import Footer from "@/app/components/home/footer/footer";
import RssContent from "./components/rss-builder/rss-content";

export default async function Rss() {
  return (
    <div className="flex flex-col size-full">
      <Header />
      <RssContent />
      <Footer />
    </div>
  )
}