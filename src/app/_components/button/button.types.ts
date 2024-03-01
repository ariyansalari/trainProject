import { ButtonHTMLAttributes } from "react";
import { ComponentBase, LoadingBehavior } from "..";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
