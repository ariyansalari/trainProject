import { SvgIcon } from ".";

export const BaseIcon: React.FC<SvgIcon> = ({
  color = "currentColor",
  width = 24,
  height = 24,
  strokeWidth = "1.5",
  viewBox = "0 0 24 24",
  children,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      {...rest}
    >
      {children}
    </svg>
  );
};
