import { GenerateRssParams } from '@/models/rss-generator-model'
import { Job } from 'bull'
const Queue = require('bull');

const rssQueue = new Queue('rss-generator')

rssQueue.process(async (job: Job<GenerateRssParams>, done: (error?: Error | null) => void) => {
    const data: GenerateRssParams = job.data
    console.log(data)
    done()
})

export const addRssQueue = async (data: GenerateRssParams) => {
    await rssQueue.add(data)
}
