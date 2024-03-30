'use client'
import { Size } from "../types/size.type";
import { TimeRef, TimerProps } from "./timer.types";
import { useTimer } from "react-timer-hook";
import classNames from "classnames";
import { TimerProgress } from "./timer-progress";
import { forwardRef, useImperativeHandle } from "react";

const sizeClasses: Record<Size, string> = {
    tiny: "timer-xs",
    small: "timer-sm",
    normal: "timer-md",
    large: "timer-lg",
};

const calculateTotalSeconds = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
): number => days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

// eslint-disable-next-line react/display-name
export const Timer = forwardRef<TimeRef, TimerProps>(
    (
        {
            expiryTimestamp,
            autoStart,
            onExpire,
            size = "normal",
            className,
            showTitle = true,
            showDays = true,
            showHours = true,
            variant = "primary",
        },
        ref
    ) => {
        const { days, hours, minutes, seconds, start, pause, resume, restart } =
            useTimer({ expiryTimestamp, onExpire, autoStart });

        const classes = classNames(
            "timer",
            { [`${sizeClasses[size]}`]: size },
            { [`timer-${variant}`]: variant },
            className
        );

        useImperativeHandle(ref, () => ({
            start,
            pause,
            resume,
            restart,
        }));

        const maxDaysValue = calculateTotalSeconds(30, 0, 0, 0);
        const maxHourseValue = calculateTotalSeconds(0, 24, 0, 0);
        const maxMinutesValue = calculateTotalSeconds(0, 0, 60, 0);
        const maxSecondsValue = calculateTotalSeconds(0, 0, 0, 60);

        const daysValue = calculateTotalSeconds(days, 0, 0, 0);
        const hoursValue = calculateTotalSeconds(0, hours, 0, 0);
        const minutesValue = calculateTotalSeconds(0, 0, minutes, 0);
        const secondsValue = calculateTotalSeconds(0, 0, 0, seconds);

        const renderTimerProgress = (
            unit: number,
            value: number,
            maxValue: number,
            datePart: string
        ) => {
            if (value !== null) {
                return (
                    <>
                    <TimerProgress
                        value={value}
                        maxValue={maxValue}
                        datePart={datePart}
                        size={size}
                        showTitle={showTitle}
                        variant={variant}
                    >
                        {unit}
                    </TimerProgress>
                    </>
                );
            }
        };

        const timeUnits = [
            {
                show: seconds != null,
                unit: seconds,
                value: secondsValue,
                maxValue: maxSecondsValue,
                datePart: "seconds",
            },
            {
                show: minutes != null,
                unit: minutes,
                value: minutesValue,
                maxValue: maxMinutesValue,
                datePart: "minutes",
            },
            {
                show: showHours && hours != null,
                unit: hours,
                value: hoursValue,
                maxValue: maxHourseValue,
                datePart: "hours",
            },
            {
                show: showDays && days != null,
                unit: days,
                value: daysValue,
                maxValue: maxDaysValue,
                datePart: "days",
            },
        ];

        return (
            <div className={`${classes} flex flex-row gap-4`} lang="en" >
                {timeUnits.map(({ show, unit, value, maxValue, datePart }) =>
                    show
                        ? renderTimerProgress(unit, value, maxValue, datePart)
                        : null
                )}
            </div>
        );
    }
);