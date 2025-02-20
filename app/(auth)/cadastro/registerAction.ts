"use server"

import db from "@/lib/db"
import { hashSync } from "bcrypt-ts"

export async function RegisterAction(_prevState: any, formData: FormData){
    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries) as {
        name:string, 
        email:string, 
        password:string
    }

    console.log("= Server Action Side =")
    console.log(data)

    // se não tiver nome, email ou senha, retorna erro
    if (!data.name || !data.email || !data.password) {
        throw new Error("Você precisa passar todos os dados!")
    }

    // se um usuário já existir, retorna erro
    const user = db.user.findUnique({
        where: {
            email: data.email,
        },
    })

    if (user) {
        throw new Error("Este usuário já foi registrado!")
    }

    // se não existir o usuário, cria o mesmo
    await db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashSync(data.password)
        }
    })
}