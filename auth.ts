import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";
import { findUserByCredential } from "./lib/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credential({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials)=>{
                console.log(credentials)

                const user = await findUserByCredential(credentials.email as string, credentials.password as string);
                
                return user
            },
        }),
    ],
});