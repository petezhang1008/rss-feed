import { DEFAULT_JOB_OPTIONS } from '@/constants/bull';
import { injectService } from '@/inversify.config';
import { FeedTask, FeedLinkTaskService } from '@/services/task/feed-link-task-service';
import { RssTaskService } from '@/services/task/rss-task-service';
import { Rss } from '@/types/model';
import { Job } from 'bull'
const Queue = require('bull');

const rssQueue = new Queue('rss-generator', process.env.REDIS_URL, DEFAULT_JOB_OPTIONS)
rssQueue.process(async (job: Job<Rss>, done: (error?: Error | null) => void) => {
    const rssTaskService = injectService<RssTaskService>(RssTaskService)
    const data: Rss = job.data
    await rssTaskService.consumeRssTask(data)
    console.log('===rss generator task===')
    done()
})

export const addRssQueue = async (data: Rss) => {
    await rssQueue.add(data)
}

const feedLinkQueue = new Queue('feed-link', process.env.REDIS_URL, DEFAULT_JOB_OPTIONS)
feedLinkQueue.process(async (job: Job<FeedTask>, done: (error?: Error | null) => void) => {
    const feedLinkTaskService = injectService<FeedLinkTaskService>(FeedLinkTaskService)
    const data: FeedTask = job.data
    await feedLinkTaskService.consumeFeedTask(data)
    console.log('===feed link task===> 100')
    done()
})

export const addFeedLinkQueue = async (data: FeedTask) => {
    await feedLinkQueue.add(data)
}
