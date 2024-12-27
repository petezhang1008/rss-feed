import { injectService } from '@/inversify.config';
import { FeedTask, FeedLinkTaskService } from '@/services/feed-link-task-service';
import { RssTaskService } from '@/services/rss-task-service';
import { Rss } from '@/types/model';
import { Job } from 'bull'
const Queue = require('bull');

const rssQueue = new Queue('rss-generator', process.env.REDIS_URL)

rssQueue.process(async (job: Job<Rss>, done: (error?: Error | null) => void) => {
    const rssTaskService = injectService<RssTaskService>(RssTaskService)
    const data: Rss = job.data
    rssTaskService.consumeRssTask(data)
    console.log('===rss generator task===')
    done()
})

export const addRssQueue = async (data: Rss) => {
    await rssQueue.add(data)
}

const feedLinkQueue = new Queue('feed-link', process.env.REDIS_URL)

feedLinkQueue.process(async (job: Job<FeedTask>, done: (error?: Error | null) => void) => {
    const feedLinkTaskService = injectService<FeedLinkTaskService>(FeedLinkTaskService)
    const data: FeedTask = job.data
    feedLinkTaskService.consumeFeedTask(data)
    console.log('===feed link task===')
    done()
})

export const addFeedLinkQueue = async (data: FeedTask) => {
    await feedLinkQueue.add(data)
}
