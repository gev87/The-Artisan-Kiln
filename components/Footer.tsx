import { initialTiles } from "@/lib/data";
import TilePreview from "./TilePreview";

export default function Footer() {
  return (
    <footer className="mt-8 pb-6 text-center text-sm font-black uppercase">
      <div className="mb-4 flex justify-center gap-2">
        {initialTiles.map((tile) => (
          <TilePreview key={tile.id} tile={tile} size="sm" />
        ))}
      </div>
      <nav className="flex flex-wrap justify-center gap-3">
        <a href="#" className="hover:underline">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:underline">Shipping Info</a>
        <span>|</span>
        <a href="#" className="hover:underline">Contact Us</a>
      </nav>
      <p className="mt-2">© 2026 The Artisan Kiln. All rights reserved.</p>
    </footer>
  );
}
