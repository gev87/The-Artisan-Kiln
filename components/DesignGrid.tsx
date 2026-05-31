"use client";

import { motion } from "framer-motion";
import { clearCell, placeTile, selectTile } from "@/features/design/designSlice";
import { initialTiles } from "@/lib/data";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import TilePreview from "./TilePreview";

export default function DesignGrid() {
  const dispatch = useAppDispatch();
  const grid = useAppSelector((state) => state.design.grid);
  const selectedTileId = useAppSelector((state) => state.design.selectedTileId);

  return (
    <section id="design" className="kiln-panel hidden overflow-hidden xl:block">
      <div className="grid grid-cols-[1fr_180px] min-[1280px]:max-[1440px]:flex min-[1280px]:max-[1440px]:flex-col-reverse">
        <div className="border-r-2 border-kiln-ink">
          <div className="border-b-2 border-kiln-ink bg-kiln-paperDark px-4 py-3 text-center">
            <h2 className="font-display text-2xl font-black uppercase">Visualize Your Order:</h2>
            <p className="text-sm font-bold">Choose a tile from the palette, then click cells to create patterns.</p>
          </div>

          <div className="bg-white/30 p-4">
            <div className="mx-auto grid max-w-130 grid-cols-6 border-2 border-kiln-ink bg-kiln-paperDark">
              {grid.map((cell) => {
                const tile = initialTiles.find((item) => item.id === cell.tileId);

                return (
                  <motion.button
                    key={cell.id}
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="aspect-square border border-kiln-ink bg-kiln-paper outline-none transition focus:ring-4 focus:ring-kiln-mustard"
                    onClick={() => dispatch(placeTile(cell.id))}
                    onContextMenu={(event) => {
                      event.preventDefault();
                      dispatch(clearCell(cell.id));
                    }}
                    aria-label={tile ? `${tile.name} tile cell` : `Empty cell. Place selected tile ${selectedTileId}`}
                    title="Left click: place tile. Right click: clear cell."
                  >
                    {tile ? <TilePreview tile={tile} size="grid" className="border-0" /> : null}
                  </motion.button>
                );
              })}
            </div>

            <div className="mx-auto mt-3 h-3 max-w-40px rounded-full border-2 border-kiln-ink bg-kiln-navy" />
          </div>
        </div>

        <DesignPalette />
      </div>
    </section>
  );
}

function DesignPalette() {
  const dispatch = useAppDispatch();
  const selectedTileId = useAppSelector((state) => state.design.selectedTileId);

  return (
    <aside className="bg-kiln-paperDark p-3">
      <h3 className="mb-3 border-b-2 border-kiln-ink pb-2 text-center font-display text-2xl font-black uppercase">
        Design Palette
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {initialTiles.map((tile, index) => {
          const isSelected = selectedTileId === tile.id;
          return (
            <button
              key={`${tile.id}-${index}`}
              type="button"
              onClick={() => dispatch(selectTile(tile.id))}
              className={`rounded-sm border-2 p-1 transition hover:-translate-y-0.5 ${
                isSelected ? "border-kiln-navy bg-white shadow-tile" : "border-kiln-ink bg-kiln-paper"
              }`}
              aria-pressed={isSelected}
              aria-label={`Select ${tile.name}`}
            >
              <TilePreview tile={tile} size="md" className="h-16 w-full" />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
