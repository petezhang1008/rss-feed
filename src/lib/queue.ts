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
    console.log('RssQueue: ===Start Consume Rss Task===', data.title)
    await rssTaskService.consumeRssTask(data)
    console.log('RssQueue: ===End Consume Rss Task===', data.title)
    done()
})

rssQueue.on('completed', (job: Job<Rss>) => {
    console.log(`Rss Job ${job.id} completed!`);
});

export const addRssQueue = async (data: Rss) => {
    await rssQueue.add(data)
}
export function clearRssQueue() {
    rssQueue.clean(0, 'completed')
    rssQueue.clean(0, 'failed')
}

const feedLinkQueue = new Queue('feed-link', process.env.REDIS_URL, DEFAULT_JOB_OPTIONS)
feedLinkQueue.process(async (job: Job<FeedTask>, done: (error?: Error | null) => void) => {
    const feedLinkTaskService = injectService<FeedLinkTaskService>(FeedLinkTaskService)
    const data: FeedTask = job.data
    console.log('FeedLinkQueue: ===Start Consume Feed Link Task===', data.rssId)
    await feedLinkTaskService.consumeFeedTask(data)
    console.log('FeedLinkQueue: ===End Consume Feed Link Task===', data.rssId)
    done()
})

feedLinkQueue.on('completed', (job: Job<FeedTask>) => {
    console.log(`feedLinkQueue Job ${job.id} completed!`);
});

export const addFeedLinkQueue = async (data: FeedTask) => {
    await feedLinkQueue.add(data)
}

export function clearFeedLinkQueue() {
    feedLinkQueue.clean(0, 'completed')
    feedLinkQueue.clean(0, 'failed')
}
