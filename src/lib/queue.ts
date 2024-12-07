import { injectService } from '@/inversify.config';
import { GenerateRssParams } from '@/models/rss-generator-model'
import { FeedTask, FeedTaskService } from '@/services/feed-link-task-service';
import { RssTaskService } from '@/services/rss-task-service';
import { Job } from 'bull'
const Queue = require('bull');

const rssQueue = new Queue('rss-generator', process.env.REDIS_URL)

rssQueue.process(async (job: Job<GenerateRssParams>, done: (error?: Error | null) => void) => {
    const rssTaskService = injectService<RssTaskService>(RssTaskService)
    const data: GenerateRssParams = job.data
    rssTaskService.consumeRssTask(data)
    done()
})

export const addRssQueue = async (data: GenerateRssParams) => {
    await rssQueue.add(data)
}

const feedLinkQueue = new Queue('feed-link', process.env.REDIS_URL)

feedLinkQueue.process(async (job: Job<FeedTask>, done: (error?: Error | null) => void) => {
    const feedTaskService = injectService<FeedTaskService>(FeedTaskService)
    const data: FeedTask = job.data
    feedTaskService.consumeFeedTask(data)
    done()
})

export const addFeedLinkQueue = async (data: FeedTask) => {
    await feedLinkQueue.add(data)
}
