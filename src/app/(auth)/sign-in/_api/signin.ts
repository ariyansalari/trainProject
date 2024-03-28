import { createData } from "@/core/http-service/http-service";
import { SignInFormProps } from "..";
import { useMutation } from "@tanstack/react-query";

export const signIn=(model:SignInFormProps):Promise<void>=>createData('/signin',model)

type UseSignInOptions ={
    onSuccess?:()=>void
}

export  const useSignIn=({onSuccess}:UseSignInOptions)=>{
    const {mutate:SubmitForm,isPending}=useMutation({
        mutationFn:signIn,
        onSuccess:onSuccess
    })
    return {
    SubmitForm,
    isPending
    }
}