import { initialTiles } from "@/lib/data";
import TilePreview from "./TilePreview";

export default function AddTileCta() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-end gap-3">
        <span className="hidden text-5xl md:inline" aria-hidden="true">🤲</span>
        <TilePreview tile={initialTiles[2]} size="lg" className="-rotate-6" />
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-3 border-2 border-kiln-ink bg-kiln-paperDark px-4 py-2 text-lg font-black uppercase shadow-tile transition hover:-translate-y-0.5 hover:bg-white"
      >
        <span className="text-3xl">+</span>
        <TilePreview tile={initialTiles[1]} size="sm" />
        <span>Add New Tile<br />To Cart</span>
      </button>
    </div>
  );
}
