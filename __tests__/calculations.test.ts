import { describe, expect, it } from "vitest";
import { calculateGrandTotal, calculateShipping, calculateSubtotal } from "../lib/calculations";

describe("order calculations", () => {
  it("calculates subtotal from quantity and unit price", () => {
    const subtotal = calculateSubtotal([
      { quantity: 2, price: 28 },
      { quantity: 3, price: 30 }
    ]);

    expect(subtotal).toBe(146);
  });

  it("adds shipping when subtotal is 500 or less", () => {
    expect(calculateShipping(500)).toBe(25);
  });

  it("makes shipping free when subtotal is greater than 500", () => {
    expect(calculateShipping(501)).toBe(0);
  });

  it("calculates grand total", () => {
    expect(calculateGrandTotal(475, 25)).toBe(500);
  });
});
