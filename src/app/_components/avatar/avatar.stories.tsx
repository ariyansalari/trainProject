import { Meta, Story, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta:Meta<typeof Avatar>={
    component:Avatar,
    tags:['autodocs'],
    decorators:[
        (Story)=>{
            document.documentElement.classList.add('dark')
            return <Story/>
        }
    ]
}
export default meta
type story=StoryObj<typeof Avatar>

export const avatarBrands:story={
    render:()=>(
        <>
        <Avatar variant="accent"/>
        <Avatar variant="error"/>
        <Avatar variant="info"/>
        <Avatar variant="neutral"/>
        <Avatar variant="primary"/>
        <Avatar variant="secondary"/>
        <Avatar variant="success"/>
        <Avatar variant="warning"/>



        </>
    )
}

export const avatarSize:story={
    render:()=>(
        <>
        <Avatar size="large"/>
        <Avatar size="small"/>
        <Avatar size="normal"/>
        <Avatar size="tiny"/>

        </>
    )
}