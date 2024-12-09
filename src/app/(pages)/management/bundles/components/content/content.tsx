import { Bundle } from '@prisma/client'
import BundleItem from './bundle-item'


export default function BundleContent({ bundles }: { bundles: Bundle[] }) {
    return (
        <div className='grid gap-4 grid-cols-3 overflow-hidden w-full'>
            {
                bundles.map(bundle => {
                    return (<BundleItem key={bundle.id} bundle={bundle}></BundleItem>)
                })
            }
        </div>
    )
}