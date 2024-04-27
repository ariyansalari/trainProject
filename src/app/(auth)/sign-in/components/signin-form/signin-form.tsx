"use client";

import { Button, TextInput } from "@/app";
import { SignInFormProps, signInSchema } from "@/app/(auth)";
import { useNotificationStore } from "@/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "@/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInFormProps>({
    resolver: zodResolver(signInSchema),
  });
  const [formState, action] = useFormState(signInAction, {
    message: "",
  });
  const router = useRouter();
  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  // router.push(`/verify?mobile=${getValues('mobile')}`)
 
  useEffect(()=>{
if(formState.message){
 showNotification({
    message:formState.message,
    type:"error"
  })
}
  },[formState,showNotification])
  const onSubmit = (data: SignInFormProps) => {
    //  signIn.SubmitForm(data);
    const formData = new FormData();
    formData.append("mobile", data.mobile);

    action(formData);
  };

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput register={register} name={"mobile"} errors={errors} />
        <Button type="submit" variant="primary">
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};
