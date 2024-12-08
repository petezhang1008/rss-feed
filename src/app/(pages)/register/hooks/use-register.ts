import { registerAction } from "@/app/lib/register-action"
import { useState } from "react"

export const useRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const result = await registerAction(email, password)
        console.log(result)
    }

    return {
        handleSubmit,
        email,
        setEmail,
        password,
        setPassword
    }
}