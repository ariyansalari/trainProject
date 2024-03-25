import React from "react";
import classNames from "classnames";
import { AlertProps } from "./alert.type";
import { IconInfo } from "@/app";

export const Alert: React.FC<AlertProps> = ({
    variant,
    className,
    showIcon = true,
    children,
}) => {
    const classes = classNames(
        "alert",
        { [`alert-${variant}`]: variant },
        className
    );

    return (
        <div className={classes}>
            {showIcon && <IconInfo width={18} />}
            {children}
        </div>
    );
};