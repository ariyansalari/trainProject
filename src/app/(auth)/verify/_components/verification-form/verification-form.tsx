'use client'
import { AuthCode, AuthCodeRef, Button, Timer } from '@/app'
import Link from 'next/link'
import React, { useRef } from 'react'

const getTwoMinutesFromNow=()=>{
  const time =new Date()
  time.setSeconds(time.getSeconds()+120)
  return time
}
export const VerificationForm = () => {
  const authCodeRef=useRef<AuthCodeRef>(null)
  return (
    <>
    <h5 className="text-2xl">کد تایید</h5>
    <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
    <form
      className="flex flex-col gap-6 mt-10 flex-1"
    >
    <AuthCode ref={authCodeRef} className="mt-10 " onChange={value=>{
console.log(value);

    }}/>


    <Timer className='my-8' size='small' expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false} />
      <Button
      onClick={authCodeRef.current?.focus}
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
