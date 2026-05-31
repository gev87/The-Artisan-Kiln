"use client";

import type { ChangeEvent, FormEvent, HTMLInputTypeAttribute } from "react";
import {
  setPaymentMethod,
  submitCheckout,
  updateField
} from "@/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { hasErrors } from "@/lib/validation";
import type { CheckoutFormValues, PaymentMethod } from "@/lib/types";

const paymentMethods: Array<{ id: PaymentMethod; label: string; icon: string }> = [
  { id: "credit-card", label: "Credit/Debit Card", icon: "💳" },
  { id: "paypal", label: "PayPal", icon: "🅿️" },
  { id: "apple-pay", label: "Apple Pay", icon: "Pay" },
  { id: "bank-transfer", label: "Bank Transfer", icon: "🏦" }
];

export default function CheckoutForm({ compact = false }: { compact?: boolean }) {
  const dispatch = useAppDispatch();
  const { values, errors, paymentMethod, submitted } = useAppSelector(
    (state) => state.checkout
  );

  const handleChange =
    (field: keyof CheckoutFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(updateField({ field, value: event.target.value }));
    };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(submitCheckout());
  };

  const showSuccess = submitted && !hasErrors(errors);

  return (
    <form
      id="checkout"
      onSubmit={onSubmit}
      className={compact ? "space-y-3" : "space-y-4"}
      noValidate
    >
      <div className={compact ? "space-y-2" : "grid gap-3 md:grid-cols-2"}>
        <TextField
          id="customer-name"
          name="customerName"
          label="Customer Name"
          value={values.customerName}
          onChange={handleChange("customerName")}
          error={errors.customerName}
          autoComplete="name"
          required
        />

        <TextField
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
          autoComplete="tel"
          inputMode="tel"
          required
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
          autoComplete="email"
          inputMode="email"
          required
        />

        <TextField
          id="shipping-address"
          name="shippingAddress"
          label="Shipping Address"
          value={values.shippingAddress}
          onChange={handleChange("shippingAddress")}
          error={errors.shippingAddress}
          autoComplete="shipping street-address"
          required
        />
      </div>

      <div>
        <label
          htmlFor="project-notes"
          className="mb-1 block text-sm font-black uppercase"
        >
          Project Name / Notes:
        </label>

        <textarea
          id="project-notes"
          name="projectNotes"
          className="min-h-16 w-full resize-none border-2 border-kiln-ink bg-white/40 px-3 py-2 font-bold outline-none focus:bg-white"
          value={values.projectNotes}
          onChange={handleChange("projectNotes")}
          placeholder="Optional notes about your project"
          autoComplete="off"
        />
      </div>

      <fieldset className="kiln-border bg-kiln-paperDark/70 p-2">
        <legend className="bg-kiln-paper px-2 text-lg font-black uppercase">
          Select Payment Method:
        </legend>

        <div
          className={
            compact
              ? "grid grid-cols-2 gap-2"
              : "grid grid-cols-2 gap-2 xl:grid-cols-4"
          }
        >
          {paymentMethods.map((method) => {
            const isSelected = paymentMethod === method.id;

            return (
              <button
                key={method.id}
                type="button"
                onClick={() => dispatch(setPaymentMethod(method.id))}
                className={`kiln-border min-h-16 bg-white/55 p-2 text-center text-sm font-black uppercase transition hover:bg-white ${
                  isSelected ? "ring-4 ring-kiln-navy" : ""
                }`}
                aria-pressed={isSelected}
                aria-label={`Select ${method.label} payment method`}
              >
                <span
                  className="mr-2 inline-flex h-4 w-4 rounded-full border-2 border-kiln-ink align-middle"
                  aria-hidden="true"
                >
                  {isSelected ? (
                    <span className="m-auto h-2 w-2 rounded-full bg-kiln-ink" />
                  ) : null}
                </span>

                <span className="text-xl normal-case" aria-hidden="true">
                  {method.icon}
                </span>

                <span className="block">{method.label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {paymentMethod === "credit-card" ? (
        <div className="kiln-border rounded-md bg-kiln-paperDark/70 p-3">
          <div
            className="mb-2 flex items-center gap-2 text-sm font-black uppercase"
            aria-hidden="true"
          >
            <span className="rounded border-2 border-kiln-ink bg-white px-2">
              Visa
            </span>
            <span className="rounded border-2 border-kiln-ink bg-white px-2">
              Mastercard
            </span>
          </div>

          <TextField
            id="card-number"
            name="cardNumber"
            label="Card Number"
            value={values.cardNumber}
            onChange={handleChange("cardNumber")}
            error={errors.cardNumber}
            autoComplete="cc-number"
            inputMode="numeric"
            placeholder="1234567812345678"
            required
          />

          <div className="mt-2 grid grid-cols-2 gap-2">
            <TextField
              id="expiration"
              name="expiration"
              label="Expiration"
              value={values.expiration}
              onChange={handleChange("expiration")}
              error={errors.expiration}
              autoComplete="cc-exp"
              inputMode="numeric"
              placeholder="MM/YY"
              required
            />

            <TextField
              id="cvv"
              name="cvv"
              label="CVV"
              value={values.cvv}
              onChange={handleChange("cvv")}
              error={errors.cvv}
              autoComplete="cc-csc"
              inputMode="numeric"
              placeholder="123"
              required
            />
          </div>
        </div>
      ) : (
        <p className="kiln-border bg-white/50 p-3 text-sm font-bold">
          You selected{" "}
          {paymentMethods.find((method) => method.id === paymentMethod)?.label}.
          Card details are not required for this method.
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-md border-2 border-kiln-ink bg-kiln-navy px-6 py-3 text-lg font-black uppercase text-white shadow-tile transition hover:-translate-y-0.5"
      >
        Place Secure Order
      </button>

      {submitted && hasErrors(errors) ? (
        <p className="field-error" role="alert">
          Please fix the highlighted fields before placing the order.
        </p>
      ) : null}

      {showSuccess ? (
        <p
          className="rounded border-2 border-kiln-ink bg-kiln-teal px-3 py-2 text-sm font-black text-white"
          role="status"
        >
          Order form is valid. Ready for submission.
        </p>
      ) : null}
    </form>
  );
}

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  required?: boolean;
}

function TextField({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  autoComplete,
  inputMode,
  required = false
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="block">
      <label htmlFor={id} className="mb-1 block text-sm font-black uppercase">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className={`w-full border-2 bg-white/50 px-3 py-2 font-bold outline-none focus:bg-white ${
          error ? "border-red-700" : "border-kiln-ink"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error ? (
        <span id={errorId} className="field-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}