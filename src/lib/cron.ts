import cron from 'node-cron'
import { addRssQueue } from './queue'

var rssGeneratorTask = cron.schedule(' * * * * *', () => {
    console.log('running a task every minute');
    addRssQueue({
        website: 'https://www.google.com',
        type: 'rss'
    })
});

export const startRssGeneratorTask = () => {
    rssGeneratorTask.start()
}
