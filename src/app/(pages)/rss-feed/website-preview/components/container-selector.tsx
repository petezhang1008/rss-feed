'use client';
import useNodePathStore from "../store/use-node-path"

export default function ContainerSelector() {

    const path = useNodePathStore(state => state.path) || '';
    const setPath = useNodePathStore(state => state.setPath);

    const updatePath = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _path = e.target.value;
        setPath(_path);
    }

    return (
        <div className="flex border-b border-gray-100 p-4 flex-col gap-2">
            <p className="text-xs text-gray-600">Container CSS selector</p>
            <input type="text" value={path}
                onChange={updatePath}
                className="input input-bordered input-primary w-full h-10" />
        </div>
    )
}