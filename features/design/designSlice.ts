import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialGrid } from "@/lib/data";
import type { GridCell, TileId } from "@/lib/types";

interface DesignState {
  selectedTileId: TileId;
  grid: GridCell[];
}

const initialState: DesignState = {
  selectedTileId: "ocean-wave",
  grid: initialGrid
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    selectTile: (state, action: PayloadAction<TileId>) => {
      state.selectedTileId = action.payload;
    },
    placeTile: (state, action: PayloadAction<string>) => {
      const cell = state.grid.find((gridCell) => gridCell.id === action.payload);
      if (cell) cell.tileId = state.selectedTileId;
    },
    clearCell: (state, action: PayloadAction<string>) => {
      const cell = state.grid.find((gridCell) => gridCell.id === action.payload);
      if (cell) cell.tileId = null;
    },
    resetGrid: (state) => {
      state.grid = initialGrid;
    }
  }
});

export const { selectTile, placeTile, clearCell, resetGrid } = designSlice.actions;
export default designSlice.reducer;
