import { solveFibonacci } from "./fibonacci-4";

describe("fibonacci test", () => {
  it("algo should count", () => {
    expect(solveFibonacci(-2, 20)).toEqual({
      a1: expect.any(Number),
      b1: expect.any(Number),
      xMin: expect.any(Number),
      fMin: expect.any(Number)
    });
  });
});
