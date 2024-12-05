import Navs from './components/navs/navs';
import Suggestions from './components/suggestions/suggestions';
import Feeds from './components/feeds/feeds';

export default function Home() {
  return (
    <div className="items-top justify-center p-4">
      <div className='w-[1180px] flex gap-6 mx-auto'>
        <Navs />
        <Feeds />
        <Suggestions />
      </div>
    </div>
  );
}
