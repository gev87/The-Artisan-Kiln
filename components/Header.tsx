import TilePreview from "./TilePreview";
import { initialTiles } from "@/lib/data";

const desktopLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#cart" },
  { label: "Collections", href: "#design" },
  { label: "About Us", href: "#summary" },
  { label: "FAQ", href: "#checkout" },
  { label: "Gallery", href: "#design" },
  { label: "Blog", href: "#" }
];

const mobileLinks = [
  { label: "Shop", href: "#cart" },
  { label: "Collections", href: "#design" },
  { label: "About Us", href: "#summary" }
];

export default function Header() {
  return (
    <header className="mb-6 border-b-2 border-kiln-ink/70 bg-kiln-paperDark/80 px-3 py-2 md:mb-4 md:px-4">
      <div className="mx-auto flex max-w-370 flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-6 text-sm font-black uppercase tracking-wide md:flex lg:gap-8"
        >
          {desktopLinks.map((link) => (
            <a key={link.label} href={link.href} className="whitespace-nowrap hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
          <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
            <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-terracotta" />
            <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-mustard" />
            <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-teal" />
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-black uppercase sm:text-lg"
          >
            {mobileLinks.map((link) => (
              <a key={link.label} href={link.href} className="whitespace-nowrap hover:underline">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3 text-xl font-black">
          <button type="button" aria-label="Open cart" className="relative leading-none">
            <span aria-hidden="true">🛒</span>
            <span className="absolute -right-2 -top-2 rounded-full border-2 border-kiln-ink bg-kiln-mustard px-1 text-[10px] leading-tight">
              3
            </span>
          </button>

          <button
            type="button"
            aria-label="Open account"
            className="hidden rounded-full border-2 border-kiln-ink bg-kiln-navy p-1 text-white md:inline-flex"
          >
            <span aria-hidden="true">👤</span>
          </button>

          <button
            type="button"
            className="rounded-md border-2 border-kiln-ink bg-kiln-navy px-2 py-1 text-xs font-black text-white sm:px-3 md:text-sm"
          >
            A. Smith
          </button>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-370 flex-col items-center justify-center text-center md:mt-4">
        <div className="flex items-center justify-center gap-2 text-kiln-navy md:gap-4">
          <span className="hidden text-5xl md:inline" aria-hidden="true">
            🏛️
          </span>

          <div>
            <h1 className="font-display text-3xl font-black uppercase leading-none tracking-wide sm:text-4xl md:text-5xl">
              Ceramic Tile Order Form
            </h1>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="hidden gap-1 md:flex" aria-hidden="true">
                {initialTiles.slice(0, 3).map((tile) => (
                  <TilePreview key={tile.id} tile={tile} size="sm" />
                ))}
              </div>

              <p className="text-lg font-black uppercase tracking-wide sm:text-xl md:text-2xl">
                The Artisan Kiln
              </p>

              <div className="hidden gap-1 md:flex" aria-hidden="true">
                {initialTiles.slice(1).map((tile) => (
                  <TilePreview key={tile.id} tile={tile} size="sm" />
                ))}
              </div>
            </div>
          </div>

          <span className="hidden text-5xl md:inline" aria-hidden="true">
            🏺
          </span>
        </div>
      </div>
    </header>
  );
}