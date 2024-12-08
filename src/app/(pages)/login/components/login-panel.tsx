import { PersonIcon, LockClosedIcon } from "@radix-ui/react-icons"

export default function LoginPanel() {
    return <div className="w-1/3 rounded-lg bg-white p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <label className="input input-bordered flex items-center gap-2">
            <PersonIcon className="text-gray-400 font-bold" />
            <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <LockClosedIcon className="text-gray-400 font-bold" />
            <input type="password" className="grow" />
        </label>
        <button className="btn btn-primary">Login</button>
    </div>
}