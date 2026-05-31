import type { Tile } from "./types";

export const SHIPPING_PRICE = 25;
export const FREE_SHIPPING_THRESHOLD = 500;

export function calculateSubtotal(items: Pick<Tile, "quantity" | "price">[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

export function calculateShipping(subtotal: number): number {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_PRICE;
}

export function calculateGrandTotal(subtotal: number, shipping: number): number {
  return subtotal + shipping;
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(value);
}
