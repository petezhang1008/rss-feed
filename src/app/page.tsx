import Navs from './components/home/navs/navs';
import Suggestions from './components/home/suggestions/suggestions';
import Feeds from './components/home/feeds/feeds';
import Header from './components/home/header/header';
import useBundles from './components/home/hooks/use-bundles';
import { auth } from '@/auth';

export default async function Home() {
  const { getBundles } = useBundles()
  const session = await auth()
  const result = await getBundles({
    page: 1,
    pageSize: 10,
    userId: session?.user?.id!
  })


  return (
    <>
      <Header />
      <div className="grow overflow-auto">
        <div className="items-top justify-center p-4">
          <div className='w-[1180px] flex gap-6 mx-auto'>
            <Navs navs={result.result} />
            <Feeds />
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
}
