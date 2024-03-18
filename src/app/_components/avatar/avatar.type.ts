import { ComponentBase } from "..";

export type AvatarProps=Omit<ComponentBase , 'isDisabled'>&{
src?:string;
alt?:string
}