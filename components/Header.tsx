import TilePreview from "./TilePreview";
import { initialTiles } from "@/lib/data";

export default function Header() {
  return (
    <header className="mb-6 border-b-2 border-kiln-ink/70 bg-kiln-paperDark/80 px-4 py-2 md:mb-4">
      <div className="mx-auto flex max-w-370 items-center justify-between gap-3">
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-black uppercase tracking-wide md:flex">
          <a href="#" className="hover:underline">Home</a>
          <a href="#cart" className="hover:underline">Shop</a>
          <a href="#design" className="hover:underline">Collections</a>
          <a href="#summary" className="hover:underline">About Us</a>
          <a href="#checkout" className="hover:underline">FAQ</a>
          <a href="#design" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Blog</a>
        </nav>

        <div className="flex flex-1 items-center gap-6 md:hidden">
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-terracotta" />
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-mustard" />
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-teal" />
          <a href="#cart" className="text-lg font-black uppercase">Shop</a>
          <a href="#cart" className="text-lg font-black uppercase">Collections</a>
          <a href="#summary" className="text-lg font-black uppercase">About Us</a>
        </div>

        <div className="flex shrink-0 items-center gap-3 text-xl font-black">
          <span aria-hidden="true">🛒</span>
          <span className="rounded-full border-2 border-kiln-ink bg-kiln-mustard px-1 text-xs">3</span>
          <span className="hidden rounded-full border-2 border-kiln-ink bg-kiln-navy p-1 text-white md:inline-flex">👤</span>
          <button className="rounded-md border-2 border-kiln-ink bg-kiln-navy px-3 py-1 text-xs font-black text-white md:text-sm">
            A. Smith
          </button>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-370 flex-col items-center justify-center text-center md:mt-4">
        <div className="flex items-center gap-2 text-kiln-navy md:gap-4">
          <span className="hidden text-5xl md:inline" aria-hidden="true">🏛️</span>
          <div>
            <h1 className="font-display text-4xl font-black uppercase leading-none tracking-wide md:text-5xl">
              Ceramic Tile Order Form
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3">
              <div className="hidden gap-1 md:flex">
                {initialTiles.slice(0, 3).map((tile) => (
                  <TilePreview key={tile.id} tile={tile} size="sm" />
                ))}
              </div>
              <p className="text-xl font-black uppercase tracking-wide md:text-2xl">The Artisan Kiln</p>
              <div className="hidden gap-1 md:flex">
                {initialTiles.slice(1).map((tile) => (
                  <TilePreview key={tile.id} tile={tile} size="sm" />
                ))}
              </div>
            </div>
          </div>
          <span className="hidden text-5xl md:inline" aria-hidden="true">🏺</span>
        </div>
      </div>
    </header>
  );
}
