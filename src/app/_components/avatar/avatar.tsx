import classNames from "classnames";
import { Size } from "..";
import { AvatarProps } from "./avatar.type";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};
export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  src,
  className,
  size = "normal",
  alt = "",
}) => {
  const classes = classNames(
    "avatar",
    {
      [`avatar-${variant}`]: variant,
      [`${sizeClasses[size]}`]: size,
    },
    className
  );
  return (
    <div
      className={classes}
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
    >
      {src ? (
        <Image
          src={src}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          alt={alt}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};
