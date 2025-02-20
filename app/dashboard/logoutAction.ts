"use server"

import { signOut } from "@/auth"
import { redirect } from "next/navigation"

export async function LogoutAction(){
    await signOut()
    redirect('/')
}