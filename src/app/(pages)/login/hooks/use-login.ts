import { loginAction } from "@/app/lib/auth-action"
import { useState } from "react"

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        return loginAction(email, password)
    }

    return {
        handleSubmit,
        email,
        setEmail,
        password,
        setPassword
    }
}