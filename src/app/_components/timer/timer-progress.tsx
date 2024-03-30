"use client";
import classNames from "classnames";
import { TimerProgressProps } from "./timer.types";
import { Size } from "../types/size.type";
import { useEffect, useState } from "react";
import { padWithZero } from "@/utils";


const sizes: Record<Size, number> = {
  tiny: 24,
  small: 34,
  normal: 43,
  large: 54,
};

export const TimerProgress: React.FC<TimerProgressProps> = ({
  variant,
  size = "normal",
  className,
  value,
  maxValue,
  children,
  datePart,
  showTitle = true,
}) => {
  const circumference = Math.round(2 * Math.PI * sizes[size]);
  const progress = Math.round(
    circumference - (circumference * value) / maxValue
  );

  const [offset, setOffset] = useState(progress);

  useEffect(() => {
    setOffset(progress);
  }, [progress]);

  const classes = classNames(
    "timer-progress",
    { [`timer-progress-${variant}`]: variant },
    className
  );

  return (
    <div className={classes} lang="en">
      <span>
        {children != null ? padWithZero(children?.toString(), 2) : ""}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={`${sizes[size] * 2 + 6}px`}
        height={`${sizes[size] * 2 + 6}px`}
      >
        <defs>
          <linearGradient id="gradientColor">
            <stop offset="0%" stopColor={"var( --color-gradient-first)"}></stop>
            <stop
              offset="100%"
              stopColor={"var( --color-gradient-second)"}
            ></stop>
          </linearGradient>
        </defs>
        <circle
          className="timer-progress-back-bar"
          cx={sizes[size] + 3}
          cy={sizes[size] + 3}
          r={sizes[size]}
          style={{
            strokeDashoffset: 0,
            strokeDasharray: circumference,
            strokeWidth: sizes[size] / 10,
          }}
        />
        <circle
          className="timer-progress-front-bar"
          cx={sizes[size] + 3}
          cy={sizes[size] + 3}
          r={sizes[size]}
          style={{
            strokeDashoffset: offset,
            strokeDasharray: circumference,
            strokeWidth: sizes[size] / 10,
          }}
        />
      </svg>
      {showTitle && (
        <label className="timer-progress-date-part">{datePart}</label>
      )}
    </div>
  );
};