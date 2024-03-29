'use client'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { AuthCodeProps, AuthCodeRef, AuthInputProps } from "./auth-code.types";
import classNames from "classnames";

// eslint-disable-next-line react/display-name
export const AuthCode =forwardRef<AuthCodeRef,AuthCodeProps> (({
  onChange,
  autoFocus = true,
  className,
  isDisabled,
  length = 5,
  variant = "ghost",
},ref) => {
  if (length < 1) {
    throw new Error("تعداد ارقام باید بزرگتر از صفر باشد");
  }
  const inputRef = useRef<Array<HTMLInputElement>>([]);
  const inputProps: AuthInputProps = {
    min: "0",
    max: "9",
    pattern: "[0-9]{1}",
  };
  useEffect(()=>{
    if(autoFocus){
        inputRef.current[0].focus()

    }

  },[autoFocus])
  const sendResult = () => {
    const result=inputRef.current.map(input=>input.value).join('')
    
    onChange(result)
  };
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {  target:{value,nextElementSibling}}=e
    if(value.match(inputProps.pattern)){
        if(nextElementSibling!==null){
            (nextElementSibling as HTMLInputElement).focus()
        }
    }else {
        e.target.value=''
    }
    sendResult()
  }

  const handleOnFocus = (e:React.FocusEvent<HTMLInputElement>) => {
e.target.select()
  };
  const handleOnkeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const {key}=e
    const target=e.target as HTMLInputElement;
    if( key==='Backspace'){
        if(target.value===''){
            if(target.previousElementSibling!==null){
                const perviousElement=target.previousElementSibling as HTMLInputElement;
                perviousElement.value=''
                perviousElement.focus()
            }
        }else {
            target.value=''
        }
        sendResult()
    }
  };
  useImperativeHandle(ref,()=>({
    focus:()=>{
if(inputRef.current){
    inputRef.current[0].focus()
}
    },clear:()=> {
      if(inputRef.current){
        for(let i=0; i<inputRef.current.length; i++){
            inputRef.current[i].value=''
        }
    inputRef.current[0].focus()
      }  
      sendResult()
    },
  }))
  const classes =classNames('textbox flex-1 w-1 text-center',{
    [`textbox-${variant}`]:variant
      })
  const inputs = [];
  for (let i = 0; i < length; i++) {
    inputs.push(
      <input
        maxLength={1}
        className={classes}
        disabled={isDisabled}
        onChange={handleOnChange}
        onKeyDown={handleOnkeyDown}
        ref={(element: HTMLInputElement) => (inputRef.current[i] = element)}
        onFocus={handleOnFocus}
      />
    );
  }

  return (
    <div dir="rtl" className={`flex gap-4 flex-row-reverse ${className}`}>
{
    inputs
}
    </div>
  )
})
