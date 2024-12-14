import { MatchingData } from '../hooks/use-format-element';

export default function MatchItem({ data }: { data: MatchingData }) {
    return (
        <div className="matching-item flex justify-between rounded-lg border border-gray-200 overflow-hidden bg-gray-50 gap-1.5 bg-white">
            <div className='flex flex-col gap-0.5 grow overflow-hidden p-3'>
                <p className='text-sm text-gray-700 truncate font-semibold'>{data.title}</p>
                <p className='text-xs text-blue-600 truncate'>{data.link}</p>
            </div>
        </div>
    )
}