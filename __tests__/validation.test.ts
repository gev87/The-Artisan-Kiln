import { describe, expect, it } from "vitest";
import { validateCheckoutForm } from "../lib/validation";
import type { CheckoutFormValues } from "../lib/types";

const validValues: CheckoutFormValues = {
  customerName: "Alex Smith",
  phone: "+1 555 123 4567",
  email: "alex@example.com",
  shippingAddress: "12 Main Street",
  projectNotes: "Kitchen backsplash",
  cardNumber: "4111 1111 1111 1111",
  expiration: "12/30",
  cvv: "123"
};

describe("checkout validation", () => {
  it("returns required field errors", () => {
    const errors = validateCheckoutForm(
      {
        customerName: "",
        phone: "",
        email: "",
        shippingAddress: "",
        projectNotes: "",
        cardNumber: "",
        expiration: "",
        cvv: ""
      },
      "credit-card"
    );

    expect(errors.customerName).toBeTruthy();
    expect(errors.phone).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.shippingAddress).toBeTruthy();
    expect(errors.cardNumber).toBeTruthy();
    expect(errors.expiration).toBeTruthy();
    expect(errors.cvv).toBeTruthy();
  });

it("validates email and card number", () => {
  const errors = validateCheckoutForm(
    {
      ...validValues,
      email: "wrong-email",
      cardNumber: "1234"
    },
    "credit-card"
  );

  expect(errors.email).toBeTruthy();
  expect(errors.cardNumber).toBeTruthy();
});

  it("does not require card fields for non-card payment methods", () => {
    const errors = validateCheckoutForm(
      {
        ...validValues,
        cardNumber: "",
        expiration: "",
        cvv: ""
      },
      "paypal"
    );

    expect(errors.cardNumber).toBeUndefined();
    expect(errors.expiration).toBeUndefined();
    expect(errors.cvv).toBeUndefined();
  });

  it("accepts a valid credit card checkout form", () => {
    const errors = validateCheckoutForm(validValues, "credit-card");
    expect(errors).toEqual({});
  });
});
