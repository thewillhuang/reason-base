open Jest;
open Expect;

let _ =

describe("App", () => {
  test("renders", () => {
    let tree = <Page one="Hello world!" two="will and kate!!!" /> |> ReactShallowRenderer.renderWithRenderer;

    expect(tree) |> toMatchSnapshot;
  });
});
