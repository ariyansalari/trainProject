"use client"

import { Button, TextInput } from "@/app";
import { SignInFormProps, useSignIn } from "@/app/(auth)";
import { useNotificationStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../types/signin.schema";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<SignInFormProps>({
    resolver:zodResolver(signInSchema)
  });
  const router=useRouter()
  const showNotification=useNotificationStore(state=>state.showNotification)

  const signIn=useSignIn({
    onSuccess:()=>{
router.push(`/verify?mobile=${getValues('mobile')}`)
showNotification({
  message:"کد تایید با موفقیت ارسال شد ",
  type:"info"
})
    }
  })
  const onSubmit = (data: SignInFormProps) => {
   signIn.SubmitForm(data);
  };

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
     
          errors={errors}
        />
        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </> 
  );
};
