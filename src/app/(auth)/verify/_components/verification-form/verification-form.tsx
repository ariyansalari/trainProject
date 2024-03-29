'use client'
import { Button } from '@/app'
import Link from 'next/link'
import React from 'react'

export const VerificationForm = () => {
  return (
    <>
    <h5 className="text-2xl">کد تایید</h5>
    <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
    <form
      className="flex flex-col gap-6 mt-10 flex-1"
    >
      <p>Auth code</p>


      Timer
      <Button
        isLink={true}
      
      >
        ارسال مجدد کد تایید
      </Button>
      <Button
        type="submit"
        variant="primary"
      
      >
        تایید و ادامه
      </Button>

      <div className="flex items-start gap-1 justify-center mt-auto">
        <span>برای اصلاح شماره موبایل</span>
        <Link href="/sign-in">اینجا</Link>
        <span>کلیک کنید</span>
      </div>
    </form>
  </>
  )
}
