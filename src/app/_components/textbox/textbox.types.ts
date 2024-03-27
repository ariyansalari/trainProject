import { InputHTMLAttributes } from "react";
import { ComponentBase } from "..";

 type TextboxType ='text'| 'number'| 'email'|'password';
export type TextboxProps=Omit<InputHTMLAttributes<HTMLInputElement>,'size'> &ComponentBase &{
    type?:TextboxType;
}