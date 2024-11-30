export default function ContainerSelector() {
    return (
        <div className="flex border-b border-gray-100 p-4 flex-col gap-2">
            <p className="text-xs text-gray-600">Container CSS selector</p>
            <input type="text" className="input input-bordered input-info w-full h-10" />
        </div>
    )
}