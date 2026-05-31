import type { CheckoutFormValues, FormErrors, PaymentMethod } from "./types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const onlyDigits = /\D/g;

function getDigits(value: string): string {
  return value.replace(onlyDigits, "");
}

function isValidLuhn(value: string): boolean {
  const digits = getDigits(value);
  let sum = 0;
  let shouldDouble = false;

  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = Number(digits[index]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return digits.length >= 12 && digits.length <= 19 && sum % 10 === 0;
}

function isValidFutureExpiration(value: string): boolean {
  const match = value.trim().match(/^(0[1-9]|1[0-2])\s?\/\s?(\d{2})$/);
  if (!match) return false;

  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  return year > currentYear || (year === currentYear && month >= currentMonth);
}

export function validateCheckoutForm(
  values: CheckoutFormValues,
  paymentMethod: PaymentMethod
): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = getDigits(values.phone);

  if (!values.customerName.trim()) {
    errors.customerName = "Customer name is required";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!values.shippingAddress.trim()) {
    errors.shippingAddress = "Shipping address is required";
  }

  if (paymentMethod === "credit-card") {
    const cvvDigits = getDigits(values.cvv);

    if (!values.cardNumber.trim()) {
      errors.cardNumber = "Card number is required";
    } else if (!isValidLuhn(values.cardNumber)) {
      errors.cardNumber = "Enter a valid card number";
    }

    if (!values.expiration.trim()) {
      errors.expiration = "Expiration date is required";
    } else if (!isValidFutureExpiration(values.expiration)) {
      errors.expiration = "Use a valid future MM/YY date";
    }

    if (!values.cvv.trim()) {
      errors.cvv = "CVV is required";
    } else if (cvvDigits.length < 3 || cvvDigits.length > 4) {
      errors.cvv = "Enter a valid CVV";
    }
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
