"use client";

import { Button, TextInput } from "@/app";
import { SignInFormProps, useSignIn } from "@/app/(auth)";
import { useNotificationStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<SignInFormProps>();
  const router=useRouter()
  const signIn=useSignIn({
    onSuccess:()=>{
router.push(`/verify?mobile=${getValues('mobile')}`)
    }
  })
  const onSubmit = (data: SignInFormProps) => {
   signIn.SubmitForm(data);
  };
  const showNotification=useNotificationStore(state=>state.showNotification)
  useEffect(()=>{
showNotification({
  type:'error',
  message:"error"
})
  },[])
  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          register={register}
          name={"mobile"}
          rules={{
            required: "شماره موبایل الزامی می باشد",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
        />
        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </> 
  );
};
