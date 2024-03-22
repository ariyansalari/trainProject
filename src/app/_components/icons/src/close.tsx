import { BaseIcon, SvgIcon } from "@/app";

export default function SvgIcon(props:SvgIcon){
    return (
        <BaseIcon {...props} >
        <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </BaseIcon>
    )
}