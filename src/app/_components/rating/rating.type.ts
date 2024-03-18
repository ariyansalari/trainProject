import { ComponentBase } from "..";

export type RatingProps =Omit<ComponentBase,'isDisabled'>&{
rate:number;

}