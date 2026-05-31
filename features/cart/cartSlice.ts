import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialTiles } from "@/lib/data";
import type { Tile, TileId } from "@/lib/types";

interface CartState {
  items: Tile[];
}

const initialState: CartState = {
  items: initialTiles
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateQuantity: (
      state,
      action: PayloadAction<{ id: TileId; quantity: number }>
    ) => {
      const item = state.items.find((tile) => tile.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(0, Math.floor(action.payload.quantity));
      }
    },
    incrementQuantity: (state, action: PayloadAction<TileId>) => {
      const item = state.items.find((tile) => tile.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<TileId>) => {
      const item = state.items.find((tile) => tile.id === action.payload);
      if (item) item.quantity = Math.max(0, item.quantity - 1);
    },
    removeItem: (state, action: PayloadAction<TileId>) => {
      state.items = state.items.filter((tile) => tile.id !== action.payload);
    },
    restoreInitialItems: (state) => {
      state.items = initialTiles;
    }
  }
});

export const {
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  restoreInitialItems
} = cartSlice.actions;

export default cartSlice.reducer;
