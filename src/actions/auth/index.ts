'use server'

import { SendAuthCode, SignInFormProps, signInSchema } from "@/app/(auth)";
import { OperationResult } from "@/types";
import { serverActionWrapper } from "..";
import { createData } from "@/core/http-service/http-service";

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