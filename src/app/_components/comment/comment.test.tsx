import { render } from "@testing-library/react";
import { Comment } from ".";

describe("comment component", () => {
  test("chages of comment", () => {
    const { container } = render(
      <Comment
        id={0}
        date={""}
        userId={undefined}
        fullName={""}
        commentText={""}
        score={null}
        isResponse={false}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
