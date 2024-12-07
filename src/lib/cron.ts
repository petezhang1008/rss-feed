import cron from 'node-cron'
import { addRssQueue } from './queue'
import { RssGeneratorFrequency, RssGeneratorType } from '@/enums/rss';
import { injectService } from '@/inversify.config';
import { RssGeneratorService } from '@/services/rss-generator-service';


var rssGeneratorTask = cron.schedule(' * * * * *', async () => {
    const rssGeneratorService = injectService<RssGeneratorService>(RssGeneratorService)
    const pageSize = 100
    let page = 1
    async function initRssQueue() {
        const rssGeneratorList = await rssGeneratorService.queryGenerateRssList({
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


export const startRssGeneratorTask = () => {
    rssGeneratorTask.start()
}
