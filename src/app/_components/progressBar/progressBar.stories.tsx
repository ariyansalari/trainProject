import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from ".";

const meta:Meta<typeof ProgressBar>={
    component:ProgressBar,
    tags:['autodocs'],
    decorators:(Story)=>{
        document.documentElement.classList.add('dark');
        return <Story/>
    }
}

export default meta;

type story=StoryObj<typeof ProgressBar>;

export const testProgressBar:story={
    render:(arg)=>(
        <>
        <ProgressBar {...arg}/>
        </>
    )
}