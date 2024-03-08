import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta:Meta<typeof Loading>={
    component:Loading,
    tags:['autodocs'],
    decorators:[
        (Stroy)=>{
            document.documentElement.classList.add('dark');
            return <Stroy/>
        }
    ]
}
export default meta;

type Story =StoryObj<typeof Loading>

export const LoadingSpinner:Story={
    render:()=>(
        <>
     <Loading size="tiny" />
        <Loading size="small" />
        <Loading size="normal" />
        <Loading size="large"  />



        </>
    )
}
export const LoadingSpinnerWithColors:Story={
    render:()=>(
        <>
        <Loading size="normal" variant="neutral"/>
        <Loading size="normal" variant="primary"/>
        <Loading size="normal" variant="secondary"/>
        <Loading size="normal" variant="accent"/>
        <Loading size="normal" variant="success"/>
        <Loading size="normal" variant="info"/>
        <Loading size="normal" variant="warning"/>
        <Loading size="normal" variant="error"/>



        </>
    )
}
export const LoadingRing:Story={
    render:()=>(
        <>
        <Loading size="tiny" type="ring" />
        <Loading size="small" type="ring" />
        <Loading size="normal" type="ring" />
        <Loading size="large" type="ring" />

        </>
    )
}
export const LoadingRingWithColors:Story ={
    render :()=>(
        <>
        <Loading type="ring"  size="normal" variant="neutral"/>
        <Loading type="ring"  size="normal" variant="primary"/>
        <Loading type="ring"  size="normal" variant="secondary"/>
        <Loading type="ring"  size="normal" variant="accent"/>
        <Loading type="ring"  size="normal" variant="success"/>
        <Loading type="ring"  size="normal" variant="info"/>
        <Loading  type="ring" size="normal" variant="warning"/>
        <Loading type="ring"  size="normal" variant="error"/>



        </>
    )
}