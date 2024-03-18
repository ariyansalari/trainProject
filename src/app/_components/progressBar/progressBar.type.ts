import { ComponentBase } from "..";

export type ProgressBarProps =Omit<ComponentBase , 'isDisabled'> &{
    value:number
}