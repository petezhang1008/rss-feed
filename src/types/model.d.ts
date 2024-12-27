import {
    Rss as RssModel,
    Task as TaskModel,
    Feed as FeedModel,
    Bundle as BundleModel,
    UserRss as UserRssModel,
    User as UserModel,
    Category as CategoryModel,
    Prisma
} from "@prisma/client";


export type Rss = RssModel
export type RssDetail = RssModel & Prisma.RssGetPayload<{
    include: {
        feed: true,
        userRss: true,
        category: true,
        tasks: true
    }
}>
export type Task = TaskModel
export type TaskWithRss = TaskModel & Prisma.TaskGetPayload<{
    include: {
        rss: true
    }
}>
export type Feed = FeedModel
export type FeedWithRss = FeedModel & Prisma.RssGetPayload<{
    include: {
        rss: true
    }
}>

export type Bundle = BundleModel
export type BundleWithRss = BundleModel & Prisma.BundleGetPayload<{
    include: {
        userRss: {
            include: {
                rss: true
            }
        }
    }
}>

export type UserRss = UserRssModel
export type UserRssWithRss = UserRssModel & Prisma.UserRssGetPayload<{
    include: {
        rss: true
    }
}>
export type UserRssWithRssAndBundle = UserRssModel & Prisma.UserRssGetPayload<{
    include: {
        rss: true
        bundle: true
    }
}>


export type User = UserModel

export type Category = CategoryModel
export type CategoryWithRss = CategoryModel & Prisma.CategoryGetPayload<{
    include: {
        rssList: true
    }
}>
