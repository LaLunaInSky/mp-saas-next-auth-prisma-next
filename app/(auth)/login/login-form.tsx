"use client"

import Form from "next/form"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from "react";
import { LoginAction } from "./loginAction";

export function LoginForm(){

    const [state, formAction, isPeding] = useActionState(LoginAction, null)

    return (
        <>
        {state?.success == false && (
            <div
            className='text-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 -mt-3 mb-1 rounded relative' role='alert'
          >
            <strong className='font-bold text-lg'>Erro!</strong><br />
            <span className='block text-sm sm:inline'>{state?.message}</span>
          </div>
        )}
            <Form action={formAction}>
                <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" />
            </div>
            <div>
                <Button disabled={isPeding} className="w-full mt-6" type="submit">
                Login
                </Button>
            </div>
            </Form>
        </>
    )
}