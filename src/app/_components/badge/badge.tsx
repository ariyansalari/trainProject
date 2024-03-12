import classNames from "classnames";
import { BadgeProps } from "./badge.type";
import { Size } from "..";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};
export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  size = "tiny",
  variant,
}: BadgeProps) => {
  const classes = classNames("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return <span className={classes}>{children}</span>;
};
