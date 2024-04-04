import { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ["autodocs"],
  decorators: (Story) => {
    document.documentElement.classList.add("dark");
    return <Story />;
  },
};
export default meta;

type story = StoryObj<typeof Alert>;

export const brandColors: story = {
  render: () => (
    <>
      <Alert variant="accent">Accent</Alert>
      <Alert variant="primary">Primary</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="ghost">Ghost</Alert>
      <Alert variant="error">Error</Alert>
      <Alert variant="info">Info</Alert>
      <Alert variant="neutral">Neutral</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="warning">Warning</Alert>
    </>
  )
};
export const alertSize:story ={
render:()=>(
    <>
      <Alert size="tiny">
        Tiny
    </Alert>
    <Alert size="small">
        Small
    </Alert>
    <Alert size="normal">
        Normal
    </Alert>
    <Alert size="large" >
        large
    </Alert>
    </>
)
}
export const testAlert:story={
    render:(arg)=>(
        <>
        <Alert {...arg}/>
        </>
    )
}