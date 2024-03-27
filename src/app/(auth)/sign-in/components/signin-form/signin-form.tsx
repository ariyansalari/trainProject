'use client'

import { Button, TextBox } from "@/app"

export const SignInForm =()=>{
    return (
        <>
        <h5 className="text-2xl">ورود | ثبت نام</h5>
        <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
        <form className="flex flex-col gap-6 mt-16">
          <TextBox placeholder="شماره موبایل"/>
          <Button type="submit" variant="primary">
            تایید و دریافت کد
          </Button>
        </form>
      </>
    )
}