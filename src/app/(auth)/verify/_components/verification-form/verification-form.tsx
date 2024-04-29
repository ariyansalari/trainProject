'use client'
import { AuthCode, AuthCodeRef, Button, TimeRef, Timer } from '@/app'
import { useNotificationStore } from '@/store'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { VerfiyUserModel } from '@/app/(auth)'
import { useFormState } from 'react-dom'
import { sendAuthCode } from '@/actions'

const getTwoMinutesFromNow=()=>{
  const time =new Date()
  time.setSeconds(time.getSeconds()+10)
  return time
}
export const VerificationForm = ({mobile}:{mobile:string}) => {
  const [showResendCode,setShowResendCode]=useState<boolean>(false)
  const params=useSearchParams()
  const router =useRouter()
  const username=params.get('mobile')!;
const timerRef=useRef<TimeRef>(null)
const [sendAuthCodeState,setAuthCodeAction]=useFormState(sendAuthCode,null)
  const authCodeRef=useRef<AuthCodeRef>(null)
const showNotification=useNotificationStore(state=>state.showNotification)
const {register,setValue,formState:{isValid},handleSubmit}=useForm<VerfiyUserModel>()


useEffect(()=>{
  if(sendAuthCodeState && !sendAuthCodeState.isSuccess && sendAuthCodeState.error){
    showNotification({
       message:sendAuthCodeState.error.detail!,
       type:"error"
     })
   }else if(sendAuthCodeState && sendAuthCodeState.isSuccess) {
     showNotification({
       message:'کد تایید مجدد به شماره ارسال شد',
       type:"info"
     })
    }
},[sendAuthCodeState,showNotification])
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
setAuthCodeAction(mobile)
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
