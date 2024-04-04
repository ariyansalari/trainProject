import { Meta, StoryObj } from "@storybook/react";
import { Price } from ".";

const meta:Meta<typeof Price>={
    component:Price,
    tags:['autodocs'],
    decorators:(Story)=>{
        document.documentElement.classList.add('dark');
        return <Story/>
    }
}

export default meta;

type stroy =StoryObj<typeof Price>;

export const testPrice:stroy={
    render:(arg)=>(
        <>
        <Price {...arg}/>
        </>
    )
}