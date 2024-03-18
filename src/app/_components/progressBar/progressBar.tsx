import classNames from "classnames";
import { ProgressBarProps } from "./progressBar.type"
import { Size } from "@/app";
const sizeClasses: Record<Size, string> = {
    tiny: "progress-xs",
    small: "progress-sm",
    normal: "progress-md",
    large: "progress-lg",
  };
export const ProgressBar:React.FC<ProgressBarProps> = ({value,className,size='small',variant='neutral'}) => {
    const classes = classNames("progress", className, {
        [`progress-${variant}`]: variant,
        [`${sizeClasses[size]}`]: size,
      });
  return (
<progress dir="rtl" value={value} max={'100'} className={classes}>

</progress>
  )
}
