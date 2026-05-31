import type { GridCell, Tile } from "./types";

export const initialTiles: Tile[] = [
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    price: 28,
    quantity: 150,
    patternClass: "tile-ocean",
    accent: "bg-kiln-navy"
  },
  {
    id: "forest-fern",
    name: "Forest Fern",
    price: 30,
    quantity: 75,
    patternClass: "tile-fern",
    accent: "bg-kiln-teal"
  },
  {
    id: "terracotta-dot",
    name: "Terracotta Dot",
    price: 26,
    quantity: 200,
    patternClass: "tile-dot",
    accent: "bg-kiln-terracotta"
  },
  {
    id: "yellow-star",
    name: "Yellow Star",
    price: 29,
    quantity: 50,
    patternClass: "tile-star",
    accent: "bg-kiln-mustard"
  }
];

const starterPattern = [
  "yellow-star",
  "ocean-wave",
  "yellow-star",
  "terracotta-dot",
  null,
  null,
  "ocean-wave",
  "terracotta-dot",
  "yellow-star",
  null,
  null,
  null,
  "terracotta-dot",
  "forest-fern",
  "forest-fern",
  "forest-fern",
  null,
  null,
  "terracotta-dot",
  "terracotta-dot",
  "forest-fern",
  "ocean-wave",
  null,
  null,
  "ocean-wave",
  "yellow-star",
  "forest-fern",
  "yellow-star",
  null,
  null,
  "ocean-wave",
  "yellow-star",
  "forest-fern",
  null,
  null,
  null
] as const;

export const initialGrid: GridCell[] = starterPattern.map((tileId, index) => ({
  id: `cell-${index}`,
  tileId
}));
