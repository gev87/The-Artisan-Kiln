import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import designReducer from "@/features/design/designSlice";
import checkoutReducer from "@/features/checkout/checkoutSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      design: designReducer,
      checkout: checkoutReducer
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
