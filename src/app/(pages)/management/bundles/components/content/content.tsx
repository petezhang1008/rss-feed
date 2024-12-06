import BundleItem from './bundle-item'

const bundleList = [{
    title: 'Tech',
    count: 3,
    createdAt: '2024-01-01'
}, {
    title: 'Tech',
    count: 3,
    createdAt: '2024-01-01'
}, {
    title: 'Tech',
    count: 3,
    createdAt: '2024-01-01'
}, {
    title: 'Tech',
    count: 3,
    createdAt: '2024-01-01'
}, {
    title: 'Tech',
    count: 3,
    createdAt: '2024-01-01'
}]

export default function BundleContent() {
    return (
        <div className='grid gap-4 grid-cols-3 overflow-hidden w-full'>
            {
                bundleList.map(bundle => {
                    return (<BundleItem bundle={bundle}></BundleItem>)
                })
            }
        </div>
    )
}