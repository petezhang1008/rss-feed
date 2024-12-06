export default function FeedHeader() {
    return (
        <div className="flex items-center gap-3">
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-lg">
                    <span className="text-xs">UI</span>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-700 font-bold">Feed</p>
                <a className="text-gray-500 text-xs hover:text-blue-700 cursor-pointer">https://daisyui.com/components/avatar/</a>
            </div>
        </div>
    )
}