export default function PreviewFooter() {
    return (
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-primary font-semibold"> 5 Nodes Selected </div>
            <button className="btn btn-sm btn-primary">Generate</button>
        </div>
    )
}