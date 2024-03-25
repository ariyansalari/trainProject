import { BaseIcon, SvgIconProps } from ".";


export default function SvgIcon(props:SvgIconProps){
    return (
        <BaseIcon {...props} >
        <path fillRule="evenodd" clipRule="evenodd" d="M19 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V19C21 20.105 20.105 21 19 21Z"/><path d="M14 6H18V10"/><path d="M10 18H6V14"/>
        </BaseIcon>
    )
}