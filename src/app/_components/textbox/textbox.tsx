import classNames from "classnames";
import { Size } from "..";
import { TextboxProps } from "./textbox.types";

const sizeClasses:Record<Size,string>={
    tiny:'textbox-xs',
    small:'textbox-sm',
    normal:'textbox-md',
    large:'textbox-lg',


}
export const TextBox:React.FC<TextboxProps> =({variant="ghost",type="text",className,size="normal",...rest})=>{
    const classes = classNames(
        "textbox",
        "w-full",
        className,
        { [`textbox-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size }
    );
    return <input type={type} className={classes} {...rest}/>
}