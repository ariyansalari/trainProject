'use client'

import { Button, TextBox } from "@/app"
import { SignInFormProps } from "@/app/(auth)"
import { useForm } from "react-hook-form"

export const SignInForm =()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<SignInFormProps>()
    const onSubmit=(data:any)=>{
        console.log(data);
        
    }
    return (
        <>
        <h5 className="text-2xl">ورود | ثبت نام</h5>
        <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
        <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
          <TextBox {...register('mobile')} placeholder="شماره موبایل"/>
          <Button type="submit" variant="primary">
            تایید و دریافت کد
          </Button>
        </form>
      </>
    )
}