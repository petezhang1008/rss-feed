import Footer from "@/app/components/home/footer/footer";
import RssContent from "../components/rss-builder/rss-content";
import OnBoarding from "../components/on-boarding/on-boarding";
import HomeRoot from "../components/root/home-root";

export default async function Rss() {
  return (
    <HomeRoot>
      <RssContent />
      <OnBoarding />
      <Footer />
    </HomeRoot>
  )
}