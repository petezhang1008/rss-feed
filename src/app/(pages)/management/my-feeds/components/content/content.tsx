import MyFeedItem from './feed-item'

const feedList = [{
    title: 'My Feed',
    link: 'www.baidu.com',
    desc: 'This is my feed'
}, {
    title: 'My Feed',
    link: 'www.baidu.com',
    desc: 'This is my feed'
}, {
    title: 'My Feed',
    link: 'www.baidu.com',
    desc: 'This is my feed'
}, {
    title: 'My Feed',
    link: 'www.baidu.com',
    desc: 'This is my feed'
}]

export default function MyFeedContent() {
    return (
        <div className='grid gap-4 grid-cols-3 overflow-hidden w-full'>
            {
                feedList.map(feed => {
                    return (<MyFeedItem feed={feed}></MyFeedItem>)
                })
            }
        </div>
    )
}