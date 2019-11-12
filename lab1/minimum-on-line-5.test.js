import { solve5 } from "./minimum-on-line-5";

describe("minimum on line test", () => {
  it("algo should count", () => {
    const f = x => Math.sin(x);

    expect(solve5(f, 0.0005, Math.PI)).toEqual({
      a: expect.any(Number),
      b: expect.any(Number)
    });
  });
});
