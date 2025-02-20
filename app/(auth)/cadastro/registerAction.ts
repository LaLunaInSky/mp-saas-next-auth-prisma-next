"use server"

export async function RegisterAction(formData: FormData){
    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries)

    console.log("= Server Action Side =")
    console.log(data)

    // se não tiver nome, email ou senha, retorna erro
    if (!data.name || !data.email || !data.password) {
        throw new Error("Você precisa passar todos os dados!")
    }

    // se um usuário já existir, retorna erro


    // se não existir o usuário, cria o mesmo
}