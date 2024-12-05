import Navs from './components/home/navs/navs';
import Suggestions from './components/home/suggestions/suggestions';
import Feeds from './components/home/feeds/feeds';
import Header from './components/home/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grow overflow-auto">
        <div className="items-top justify-center p-4">
          <div className='w-[1180px] flex gap-6 mx-auto'>
            <Navs />
            <Feeds />
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
}
