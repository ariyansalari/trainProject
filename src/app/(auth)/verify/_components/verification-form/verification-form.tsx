'use client'
import { AuthCode, AuthCodeRef, Button, TimeRef, Timer } from '@/app'
import { useNotificationStore } from '@/store'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { VerfiyUserModel, useSendAuthCode } from '@/app/(auth)'

const getTwoMinutesFromNow=()=>{
  const time =new Date()
  time.setSeconds(time.getSeconds()+120)
  return time
}
export const VerificationForm = () => {
  const [showResendCode,setShowResendCode]=useState<boolean>(false)
  const params=useSearchParams()
  const router =useRouter()
  const username=params.get('mobile')!;
const timerRef=useRef<TimeRef>(null)
  const authCodeRef=useRef<AuthCodeRef>(null)
const showNotification=useNotificationStore(state=>state.showNotification)
const {register,setValue,formState:{isValid},handleSubmit}=useForm<VerfiyUserModel>()
const sendAuthCode=useSendAuthCode({
  onSuccess:()=> {
    showNotification({
      message:"کد تایید به شماره شما ارسال شد.",
      type:"info"
    })
    router.push('/')
  },
})
const onSubmit=(data:VerfiyUserModel)=>{
  data.username=username
  console.log(data);
  
}
register('code',{
  validate:(value)=>(value??'').length===5
})
  const resendAuthCode =()=>{
timerRef?.current?.restart(getTwoMinutesFromNow())
setShowResendCode(false)
sendAuthCode.submit(username);
authCodeRef.current?.clear()
  }
  return (
    <>
    <h5 className="text-2xl">کد تایید</h5>
    <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
    <form
    onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-10 flex-1"
    >
    <AuthCode ref={authCodeRef} className="mt-10 " onChange={value=>{
setValue('code',value,{shouldValidate:true})

    }}/>


    <Timer ref={timerRef} className='my-8' size='small' onExpire={()=>setShowResendCode(true)} expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false} />
      <Button
      onClick={resendAuthCode}
      isDisabled={!showResendCode}
        isLink={true}
      
      >
        ارسال مجدد کد تایید
      </Button>
      <Button
      isDisabled={!isValid}
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
