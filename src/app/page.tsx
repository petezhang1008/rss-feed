import Navs from './components/home/navs/navs';
import Suggestions from './components/home/suggestions/suggestions';
import Feeds from './components/home/feeds/feeds';
import Header from './components/home/header/header';
import useBundles from './components/home/hooks/server/use-bundles';
import { auth } from '@/auth';
import { useFeed } from './components/home/hooks/server/use-feeds';

export default async function Home({ searchParams }: { searchParams: { bundleId: string } }) {
  const { getBundles } = useBundles()
  const { getFeeds } = useFeed()
  const session = await auth()
  const { bundleId } = await searchParams

  const [bundleResult, feedResult] = await Promise.all([
    getBundles({
      page: 1,
      pageSize: 50,
      userId: session?.user?.id!
    }),
    getFeeds(bundleId)
  ])
  return (
    <>
      <Header />
      <div className="grow overflow-auto">
        <div className="items-top justify-center p-4">
          <div className='w-[1180px] flex gap-6 mx-auto'>
            <Navs navs={bundleResult.result} />
            <Feeds paginationFeeds={feedResult} bundleId={bundleId} key={bundleId} />
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
}
