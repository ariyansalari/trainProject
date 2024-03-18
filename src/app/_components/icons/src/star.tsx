import { BaseIcon, SvgIconProps } from "@/app";

export default function SvgIcon(props:SvgIconProps){
    return (
        <BaseIcon {...props} >
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.896L14.935 8.889L21.5 9.856L16.75 14.518L17.871 21.104L12 17.993L6.129 21.104L7.25 14.518L2.5 9.856L9.064 8.889L12 2.896Z"/>
        </BaseIcon>
    )
}