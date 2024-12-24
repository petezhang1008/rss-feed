import BundleItem from './bundle-item'
import { BundleWithRss } from '@/types/model'


export default function BundleContent({ bundles }: { bundles: BundleWithRss[] }) {
    return (
        <div className='grid gap-4 grid-cols-3 w-full'>
            {
                bundles.map(bundle => {
                    return (<BundleItem key={bundle.id} bundle={bundle}></BundleItem>)
                })
            }
        </div>
    )
}