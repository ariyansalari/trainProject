import { ReactNode } from "react";
import { ComponentBase } from "..";

export type BadgeProps =Omit<ComponentBase, 'isDisabled'>&{
 children:ReactNode
}