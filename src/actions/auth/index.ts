'use server'

import { signInSchema } from "@/app/(auth)";
import { redirect } from "next/navigation";

export async function signInAction(formState:{message:string},formData:FormData) {
  const mobile =formData.get('mobile')

    const validateData=signInSchema.safeParse({
        mobile
    })
    if(!validateData.success){
     return{
        message:"خطا در فرمت موبایل"
     }
        
    }else{
try{
throw "خطا در برقراری ارتباط با سرور"
}catch(error){
return{
    message:error as string
}
}
        
    }
    
}