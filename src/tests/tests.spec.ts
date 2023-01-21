import { calcTime, convertMoney } from "../helpers";

describe("Helpers functions", () => {
  test("validate calcTime", () => {
    expect(calcTime(135)).toBe("2h 15m");
  }),
    test("validate convertMoney", () => {
      expect(convertMoney(50000000)).toBe("$50,000,000");
    });
});
