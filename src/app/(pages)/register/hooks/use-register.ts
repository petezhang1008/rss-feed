import useToast from "@/app/hooks/use-toast"
import { loginAction } from "@/app/lib/auth-action"
import { registerAction } from "@/app/lib/register-action"
import { useState } from "react"

export const useRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { toast } = useToast()

    const handleSubmit = async () => {
        try {
            const result = await registerAction(email, password)
            if (result && result.id) {
                toast.success('Registering successfully, proceeding to log in.')
                await loginAction(email, password)
            } else {
                toast.error('Register failed')
            }
        } catch (error) {
            toast.error('Register failed, please try again')
        }
    }

    return {
        handleSubmit,
        email,
        setEmail,
        password,
        setPassword
    }
}