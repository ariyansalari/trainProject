import { forwardRef, useImperativeHandle } from "react";
import { Size } from "..";
import { TimeRef, TimerProps } from "./timer.types";
import { useTimer } from "react-timer-hook";
import classNames from "classnames";

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
): number => (days * 24 * 60) & (60 + hours * 60 * 60 + minutes * 60 + seconds);

// eslint-disable-next-line react/display-name
export const Timer = forwardRef<TimeRef, TimerProps>(
  (
    {
      expiryTimestamp,
      autoStart,
      className,
      onExpire,
      showDays = true,
      showTitle = true,
      variant = "primary",
      showHours,
      size = "normal",
    },
    ref
  ) => {
    const { days, hours, minutes, seconds, start, pause, restart, resume } =
      useTimer({
        expiryTimestamp,
        onExpire,
        autoStart,
      });
    const classes = classNames(
      "timer",
      {
        [`${sizeClasses[size]}`]: size,
      },
      { [`timer-${variant}`]: variant },
      className
    );
    useImperativeHandle(ref, () => ({
      start,
      pause,
      restart,
      resume,
    }));
    const maxDayValue = calculateTotalSeconds(30, 0, 0, 0);
    const maxHoursValue = calculateTotalSeconds(0, 24, 0, 0);
    const maxMinutesValue = calculateTotalSeconds(0, 0, 60, 0);
    const maxSecondsValue = calculateTotalSeconds(0, 0, 0, 60);

    const daysValue = calculateTotalSeconds(days, 0, 0, 0);
    const hoursValue = calculateTotalSeconds(0, hours, 0, 0);
    const minutesValue = calculateTotalSeconds(0, 0, minutes, 0);
    const secondsValue = calculateTotalSeconds(0, 0, 0, seconds);

    const renderTimerProgress = (
      value: number,
      maxValue: number,
      unit: number,
      datePart: string
    ) => {
      if (value !== null) {
        return (
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
        );
      }
    };

    const timeUnits = [
      {
        show: seconds != null,
        unit: seconds,
        datePart: "seconds",
        value: secondsValue,
        maxValue: maxSecondsValue,
      },
      {
        show: minutes != null,
        unit: minutes,
        datePart: "minutes",
        value: minutesValue,
        maxValue: maxMinutesValue,
      },
      {
        show: showHours && hours != null,
        unit: hours,
        datePart: "hours",
        value: hoursValue,
        maxValue: maxHoursValue,
      },
      {
        show: showDays && days != null,
        unit: days,
        datePart: "days",
        value: daysValue,
        maxValue: maxDayValue,
      },
    ];
    return (
      <div className={`${classes} flex flex-row gap-4`} lang="en">
        {timeUnits.map(({ maxValue, value, datePart, show, unit }) =>
          show ? renderTimerProgress(unit, value, maxValue, datePart) : null
        )}
      </div>
    );
  }
);
