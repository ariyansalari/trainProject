import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { withTests } from "@storybook/addon-jest";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const testBadge: Story = {
  render: (arg) => <Badge {...arg}>Test Badge</Badge>,
};
testBadge.decorators=[withTests({results})]
export const BadgeBrands: Story = {
  render: () => (
    <>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="error">error</Badge>
      <Badge variant="ghost">ghost</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="neutral">neutral</Badge>
      <Badge variant="primary">primary</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="secondary">secondary</Badge>
    </>
  ),
};
export const State: Story = {
  render: () => (
    <>
      <Badge variant="error">error</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
    </>
  ),
};
