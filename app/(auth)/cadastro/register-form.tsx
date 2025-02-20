"use client"

import { Button } from '@/components/ui/button';
import Form from "next/form"
import { RegisterAction } from './registerAction';
import { useActionState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function RegisterForm(){
    const [state, formAction, isPending] = useActionState(RegisterAction, null)

    return (
        <Form action={formAction}>
            <div>
              <Label>Nome</Label>
              <Input type="text" name="name" placeholder="Fulano de Tal" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
              <Label>Senha</Label>
              <Input type="password" name="password" placeholder="********" />
            </div>
            <div>
              <Button className="w-full mt-6" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
    )
}