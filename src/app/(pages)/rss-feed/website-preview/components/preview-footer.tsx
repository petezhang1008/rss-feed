'use client';
import useSelectedNodesStore from "../store/use-selected-nodes"

export default function PreviewFooter() {
    const selectedNodes = useSelectedNodesStore(state => state.selectedNodes)

    return (
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="text-primary font-semibold"> {selectedNodes?.length || 0} Nodes Selected </div>
            <button className="btn btn-sm btn-primary">Generate</button>
        </div>
    )
}