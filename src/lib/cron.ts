import cron from 'node-cron'
import { addRssQueue } from './queue'
import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { injectService } from '@/inversify.config';
import { RssService } from '@/services/rss-service';


var rssDailyTask = cron.schedule(' 0 8 * * *', async () => {
    console.log('===start rss generator task===')
    const rssGeneratorService = injectService<RssService>(RssService)
    const pageSize = 100
    let page = 1
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryRssList({
            page: 1,
            pageSize: 100,
            type: RssGeneratorType.WEBSITE,
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


var rssHourlyTask = cron.schedule(' 0 * * * *', async () => {
    console.log('===start rss generator task===')
    const rssGeneratorService = injectService<RssService>(RssService)
    const pageSize = 100
    let page = 1
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryRssList({
            page: 1,
            pageSize: 100,
            type: RssGeneratorType.WEBSITE,
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