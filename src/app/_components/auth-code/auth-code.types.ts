import { ComponentBase } from "..";

export type AuthCodeProps =Omit<ComponentBase,'size'> &{
    autoFocus?:boolean;
    length?:number;
    onChange:(value:string)=>void;
}
export type AuthInputProps={
    min?:string;
    max?:string;
    pattern:string;
}

export type AuthCodeRef= {
    focus:()=>void;
    clear:()=>void;
    
}