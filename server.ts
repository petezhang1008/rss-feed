import express from 'express'
import next from 'next'
import 'reflect-metadata'
import '@/inversify/index'
import { startRssGeneratorTask } from '@/lib/cron'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    startRssGeneratorTask()

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
})

