import { Meta, StoryObj } from "@storybook/react";
import { Rating } from ".";

const meta:Meta<typeof Rating> ={
    component:Rating,
    tags:['autodocs'],
    decorators:(Story)=>{
        document.documentElement.classList.add('dark')
        return <Story/>
    }
}

export default meta;

type story=StoryObj<typeof Rating>;

export const brandColors:story ={
    render:()=>(
        <>
        <Rating variant="primary" rate={5}/>
        <Rating variant="secondary" rate={5}/>
        <Rating variant="error" rate={5}/>
        <Rating variant="ghost" rate={5}/>
        <Rating variant="info" rate={5}/>
        <Rating variant="accent" rate={5}/>
        <Rating variant="success" rate={5}/>
        <Rating variant="neutral" rate={5}/>
        <Rating variant="warning" rate={5}/>



        </>
    )
}
export const ratingSize :story={
    render:()=>(
        <>
        <Rating rate={1} size="tiny"/>
        <Rating rate={2} size="small"/>
        <Rating rate={3} size="normal"/>
        <Rating rate={4} size="large"/>



        </>
    )
}

export const testRating:story={
    render:(arg)=>(
        <>
        <Rating {...arg}/>
        </>
    )
}