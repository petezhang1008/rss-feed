import cron from 'node-cron'
import { addRssQueue } from './queue'
import { RssGeneratorFrequency } from '@/enums/rss';
import { injectService } from '@/inversify.config';
import { RssService } from '@/services/prisma/rss-service';


const rssDailyTask = cron.schedule(' 0 8 * * *', async () => {
    console.log('===start rss generator task===')
    const rssGeneratorService = injectService<RssService>(RssService)
    const pageSize = 100
    let page = 1
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryRssList({
            page: 1,
            pageSize: 100,
            frequency: RssGeneratorFrequency.DAY
        })
        if (rssGeneratorList.total > page * pageSize) {
            page++
            await initRssQueue()
        }
        for (const rssGenerator of rssGeneratorList.result) {
            addRssQueue(rssGenerator)
        }
    }
    initRssQueue()
});


const rssHourlyTask = cron.schedule(' 0 * * * *', async () => {
    console.log('===start rss generator task===')
    const rssGeneratorService = injectService<RssService>(RssService)
    const pageSize = 100
    let page = 1
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryRssList({
            page: 1,
            pageSize: 100,
            frequency: RssGeneratorFrequency.HOUR
        })
        if (rssGeneratorList.total > page * pageSize) {
            page++
            await initRssQueue()
        }
        for (const rssGenerator of rssGeneratorList.result) {
            addRssQueue(rssGenerator)
        }
    }
    initRssQueue()
});


export const startRssGeneratorTask = () => {
    rssDailyTask.start()
    rssHourlyTask.start()
}