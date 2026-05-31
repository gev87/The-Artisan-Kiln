import { cn } from "@/lib/utils";
import type { Tile } from "@/lib/types";

interface TilePreviewProps {
  tile: Pick<Tile, "patternClass" | "name">;
  size?: "sm" | "md" | "lg" | "grid";
  className?: string;
}

const sizeClass = {
  sm: "h-9 w-9",
  md: "h-14 w-14",
  lg: "h-20 w-20",
  grid: "h-full w-full"
};

export default function TilePreview({ tile, size = "md", className }: TilePreviewProps) {
  return (
    <div
      aria-label={`${tile.name} pattern`}
      className={cn("tile-preview", sizeClass[size], tile.patternClass, className)}
    />
  );
}
