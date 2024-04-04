import { Meta, StoryObj } from "@storybook/react";
import { Comment } from ".";

const meta:Meta<typeof Comment>={
    component:Comment,
    tags:['autodocs'],
    decorators:(Story)=>{
document.documentElement.classList.add('dark')
return <Story/>
    }
}


export default meta;

type story=StoryObj<typeof Comment>;

export const commentTag:story={
    render:()=>(
        <>
        <Comment id={1} date={"2024/08/04"} userId={1} fullName={"ariyansalari"} commentText={"how you doing ma friend"} score={3} isResponse={false} />
        <Comment id={1} date={"2024/08/06"} userId={1} fullName={"admin"} commentText={"how you doing ma friend"} score={2} isResponse={true} />

        </>
    )
}
export const testComment :story={
    render:(arg)=>(
        <>
        <Comment {...arg}/>
        </>
    )
}