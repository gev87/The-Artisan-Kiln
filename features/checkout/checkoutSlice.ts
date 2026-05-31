import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CheckoutFormValues, FormErrors, PaymentMethod } from "@/lib/types";
import { hasErrors, validateCheckoutForm } from "@/lib/validation";

interface CheckoutState {
  paymentMethod: PaymentMethod;
  values: CheckoutFormValues;
  errors: FormErrors;
  submitted: boolean;
}

const initialState: CheckoutState = {
  paymentMethod: "credit-card",
  values: {
    customerName: "",
    phone: "",
    email: "",
    shippingAddress: "",
    projectNotes: "",
    cardNumber: "",
    expiration: "",
    cvv: ""
  },
  errors: {},
  submitted: false
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload;
      state.errors = validateCheckoutForm(state.values, state.paymentMethod);
    },
    updateField: (
      state,
      action: PayloadAction<{ field: keyof CheckoutFormValues; value: string }>
    ) => {
      state.values[action.payload.field] = action.payload.value;
      if (state.submitted) {
        state.errors = validateCheckoutForm(state.values, state.paymentMethod);
      }
    },
    submitCheckout: (state) => {
      state.submitted = true;
      state.errors = validateCheckoutForm(state.values, state.paymentMethod);
    },
    clearCheckout: (state) => {
      state.values = initialState.values;
      state.errors = {};
      state.submitted = false;
    }
  }
});

export const selectCanPlaceOrder = (state: CheckoutState) => {
  const errors = validateCheckoutForm(state.values, state.paymentMethod);
  return !hasErrors(errors);
};

export const { setPaymentMethod, updateField, submitCheckout, clearCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
