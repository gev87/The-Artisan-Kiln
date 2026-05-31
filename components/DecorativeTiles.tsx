import { initialTiles } from "@/lib/data";
import TilePreview from "./TilePreview";

export default function DecorativeTiles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-75" aria-hidden="true">
      <div className="absolute -left-7 top-24 grid grid-cols-1 gap-3 md:left-4 md:top-12">
        {initialTiles.map((tile) => (
          <TilePreview key={tile.id} tile={tile} size="sm" className="rotate-6" />
        ))}
      </div>
      <div className="absolute -right-8 bottom-24 grid grid-cols-1 gap-3 md:right-6 md:top-16">
        {[...initialTiles].reverse().map((tile) => (
          <TilePreview key={tile.id} tile={tile} size="sm" className="-rotate-6" />
        ))}
      </div>
      <div className="absolute bottom-2 left-4 hidden gap-3 md:flex">
        {initialTiles.map((tile) => (
          <TilePreview key={tile.id} tile={tile} size="sm" />
        ))}
      </div>
    </div>
  );
}
