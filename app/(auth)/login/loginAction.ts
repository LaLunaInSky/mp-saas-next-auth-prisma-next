"use server"

import { signIn } from "@/auth"
import { redirect } from "next/dist/server/api-utils"

export async function LoginAction(_prevState: any,formData: FormData){
    try {
        await signIn("credentials", formData)
        return {
            success: true,
            redirect: true,
        }
    } catch (error) {
        if (error.type === "CredentialsSignin") {
            return {
                message: "Dados de Login Incorretos.",
                success: false,
                redirect: false,
            }
        }

        return {
            message: "Algo deu errado!",
            success: false,
            redirect: false,
        }
    }
} 