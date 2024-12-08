'use client'
import { PersonIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { useRegister } from "../hooks/use-register"

export default function RegisterPanel() {
    const { email, setEmail, password, setPassword, handleSubmit } = useRegister()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return <div className="w-1/3 rounded-lg bg-white p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <label className="input input-bordered flex items-center gap-2">
            <PersonIcon className="text-gray-400" />
            <input type="text" className="grow" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <LockClosedIcon className="text-gray-400" />
            <input type="password" className="grow" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
    </div>
}