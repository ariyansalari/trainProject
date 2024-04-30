'use server'

import { SendAuthCode, SignInFormProps, signInSchema } from "@/app/(auth)";
import { OperationResult, Problem } from "@/types";
import { serverActionWrapper } from "..";
import { createData } from "@/core/http-service/http-service";
import { signIn, signOut } from "@/auth";

export async function signInAction(formState:OperationResult<string>|null,formData:FormData) {
  const mobile =formData.get('mobile') as string

    // const validateData=signInSchema.safeParse({
    //     mobile
    // })
    // if(!validateData.success){
    //  return{
    //     message:"خطا در فرمت موبایل"
    //  }
        
    // }else{
return serverActionWrapper(async()=>await createData<SignInFormProps,string>('/signin',{
    mobile
}))


    
}
export async function sendAuthCode (formState:OperationResult<string>|null , mobile:string){

  return serverActionWrapper(async()=>  createData<SendAuthCode,string>("/send-auth-code", { mobile }))
}

export async function verify(state:Problem|undefined,formData:FormData) {

  try{
await signIn('credentials',formData)
  }catch(error){

    return{
status:0,
title:"",
    }satisfies Problem;
  }
  
}
  

export async function logout(){
  await signOut()
}