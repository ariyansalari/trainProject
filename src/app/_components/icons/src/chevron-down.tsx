import { BaseIcon, SvgIconProps } from "..";

export default function SvgIcon(props:SvgIconProps){
    return (
        <BaseIcon {...props} >
        <path d="M21 7.5L12 16.5L3 7.5"/>
        </BaseIcon>
    )
}