
export const RABBIT_MQ_USERNAME = process.env.RABBIT_MQ_USERNAME
export const RABBIT_MQ_PASSWORD = process.env.RABBIT_MQ_PASSWORD
export const RABBIT_MQ_HOST = process.env.RABBIT_MQ_HOST
export const RABBIT_MQ_PORT = process.env.RABBIT_MQ_PORT
export const RABBIT_MQ_VHOST = process.env.RABBIT_MQ_VHOST

export const RABBIT_MQ_URL = `amqp://${RABBIT_MQ_USERNAME}:${RABBIT_MQ_PASSWORD}@${RABBIT_MQ_HOST}:${RABBIT_MQ_PORT}/${RABBIT_MQ_VHOST}`


