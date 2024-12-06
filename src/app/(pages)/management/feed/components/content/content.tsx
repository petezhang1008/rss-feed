import FeedItem from "./feed-item"
import styles from "../../styles/feed.module.scss"

const feedList = [{
    title: 'U.S. Small Business Job Growth Rate Remained Steady in November',
    img: 'https://static01.nyt.com/images/2024/12/05/multimedia/05dc-pardon-tblm/05dc-pardon-tblm-videoSixteenByNine3000.jpg',
    desc: 'The Washington State Attorney General’s Office issued a warning on Thursday after receiving complaints of scammers posing as the state to demand money from small businesses.',
    link: 'https://www.google.com',
    date: '2024-01-01'
}, {
    title: 'U.S. Small Business Job Growth Rate Remained Steady in November',
    img: 'https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2022/07/26866/background-employment1_10778812.png',
    desc: 'The Washington State Attorney General’s Office issued a warning on Thursday after receiving complaints of scammers posing as the state to demand money from small businesses.',
    link: 'https://www.google.com',
    date: '2024-01-01'
}, {
    title: 'U.S. Small Business Job Growth Rate Remained Steady in November',
    img: 'https://static01.nyt.com/images/2024/12/05/multimedia/05dc-pardon-tblm/05dc-pardon-tblm-videoSixteenByNine3000.jpg',
    desc: 'The Washington State Attorney General’s Office issued a warning on Thursday after receiving complaints of scammers posing as the state to demand money from small businesses.',
    link: 'https://www.google.com',
    date: '2024-01-01'
}, {
    title: 'U.S. Small Business Job Growth Rate Remained Steady in November',
    img: 'https://static01.nyt.com/images/2024/12/05/multimedia/05dc-pardon-tblm/05dc-pardon-tblm-videoSixteenByNine3000.jpg',
    desc: 'The Washington State Attorney General’s Office issued a warning on Thursday after receiving complaints of scammers posing as the state to demand money from small businesses.',
    link: 'https://www.google.com',
    date: '2024-01-01'
}, {
    title: 'U.S. Small Business Job Growth Rate Remained Steady in November',
    img: 'https://static01.nyt.com/images/2024/12/05/multimedia/05dc-pardon-tblm/05dc-pardon-tblm-videoSixteenByNine3000.jpg',
    desc: 'The Washington State Attorney General’s Office issued a warning on Thursday after receiving complaints of scammers posing as the state to demand money from small businesses.',
    link: 'https://www.google.com',
    date: '2024-01-01'
},]

export default function FeedContent() {
    return (
        <div className='grid-flow-dense auto-rows-auto grid gap-4 grid-cols-2 overflow-hidden w-full'>
            {
                feedList.map(feed => {
                    return (<FeedItem feed={feed}></FeedItem>)
                })
            }
        </div>
    )
}