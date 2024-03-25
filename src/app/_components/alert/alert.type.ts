import { ComponentBase } from "..";

export type AlertProps=Omit<ComponentBase , 'isDisabled'|'size ' > &{
    showIcon ?:boolean;
    children:React.ReactNode
}