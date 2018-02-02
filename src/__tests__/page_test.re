open Jest;
open Expect;

let _ =

describe("Page", () => {
  test("renders", () => {
    let tree = <Page message="REASONML" /> |> ReactShallowRenderer.renderWithRenderer;

    expect(tree) |> toMatchSnapshot;
  });
});
