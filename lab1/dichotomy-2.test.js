import { dichotomy } from "./dichotomy-2";

describe("dichotomy test", () => {
  it("algo should count", () => {
    expect(dichotomy(3, 10)).toEqual({
      resultInGivenInterval: expect.any(Number),
      counter: expect.any(Number)
    });
  });
});
