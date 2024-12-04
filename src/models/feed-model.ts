import { Feed } from "@prisma/client"


export const FeedModel = Symbol.for('FeedModel')

export interface FeedModel {
    queryUserFeed: (userId: string) => Promise<Feed[] | null>
    getFeed: (feedId: string) => Promise<Feed | null>
    createFeed: (feed: Feed) => Promise<Feed>
    updateFeed: (feed: Feed) => Promise<Feed>
    deleteFeed: (feedId: string) => Promise<Feed>
}