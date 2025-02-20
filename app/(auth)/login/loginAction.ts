"use server"

import { signIn } from "@/auth"

export async function LoginAction(_prevState: any,formData: FormData){
    try {
        await signIn("credentials", formData)
        return {
            success: true,
        }
    } catch (error) {
        if (error.type === "CredentialsSignin") {
            return {
                message: "Dados de Login Incorretos.",
                success: false
            }
        }
    }
} 