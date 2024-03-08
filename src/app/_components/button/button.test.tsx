import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true ", () => {
    render(<Button isDisabled={true}>is Disable</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("variants of props to have the correct css", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Info</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test('check the outline button when the props of outline is true',()=>{
    render(<Button isOutline={true}>Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-outline')
  })

  test("the size of Buttons ",()=>{
    const {rerender}=render(<Button size="tiny">tiny</Button>)
    expect(screen.getByText('tiny')).toHaveClass('btn-xs')

    rerender(<Button size="small">small</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-sm')
  })
});
