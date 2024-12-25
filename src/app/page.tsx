import Navs from './components/home/navs/navs';
import Suggestions from './components/home/suggestions/suggestions';
import Feeds from './components/home/feeds/feeds';
import Header from './components/home/header/header';
import { useFeed } from './components/home/hooks/server/use-feeds';
import { useCategory } from './components/home/hooks/server/use-category';
import { useRssStatus } from './components/home/hooks/server/use-rss-status';
import { useFavoriteRss } from './components/home/hooks/server/use-favorite-rss';

export default async function Home({ searchParams }: { searchParams: Promise<{ categoryId: string }> }) {
  const { getFeedByCategory } = useFeed()
  const { getCategories } = useCategory()
  const { getLatestFeedCount } = useRssStatus()
  const { getFavoriteRssList } = useFavoriteRss()
  const { categoryId } = await searchParams

  const [categories, feedResult, feedCountData, favoriteRssList] = await Promise.all([
    getCategories(),
    getFeedByCategory({
      categoryId,
      page: 1,
      pageSize: 100
    }),
    getLatestFeedCount(),
    getFavoriteRssList()
  ])
  return (
    <>
      <Header />
      <div className="grow overflow-auto">
        <div className="items-top justify-center p-4">
          <div className='w-[1180px] flex gap-6 mx-auto'>
            {categories && <Navs navs={categories} />}
            <Feeds paginationFeeds={feedResult} categoryId={categoryId} key={categoryId} />
            <Suggestions feedCountData={feedCountData} favoriteRssList={favoriteRssList} />
          </div>
        </div>
      </div>
    </>
  );
}
