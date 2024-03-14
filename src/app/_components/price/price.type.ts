import { ComponentBase } from "..";

export type PriceProps=Omit<ComponentBase , 'isDisabled' | 'variant' >&{
    price?:number;
    text?:string;
    
}