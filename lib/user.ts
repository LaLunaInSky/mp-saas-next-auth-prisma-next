import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
    name: string;
    email: string;
    password?: string;
}

export async function findUserByCredential(email:string, password:string): Promise<User | null>{
    const user = await db.user.findFirst({
        where:{
            email: email,
        },
    })

    if (!user) {
        return null
    } else {
        const passwordMatch = compareSync(password, user.password)

        if (passwordMatch) {
            return {
                name: user.name,
                email: user.email,
            }
        }
    }

    return null
}