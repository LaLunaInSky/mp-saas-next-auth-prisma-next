import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credential({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials)=>{
                console.log(credentials)

                //lógica de autentificação
                //procura usuário por credentials
                const user = await findUserByCredential(email, password);

                //se não autenticado, retorna null


                // se autenticado, retorna user

                return {
                    name: "roberto",
                    email: "roberto@teste.com",
                    password: "123456"
                }
            },
        }),
    ],
});