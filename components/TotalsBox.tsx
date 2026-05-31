"use client";

import { calculateGrandTotal, calculateShipping, calculateSubtotal, formatMoney } from "@/lib/calculations";
import { useAppSelector } from "@/lib/hooks";

export default function TotalsBox({ compact = false }: { compact?: boolean }) {
  const items = useAppSelector((state) => state.cart.items);
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const grandTotal = calculateGrandTotal(subtotal, shipping);

  const rowClass = compact
    ? "grid grid-cols-[1fr_auto] gap-3 text-right text-sm font-black uppercase"
    : "grid grid-cols-[1fr_120px] items-center gap-2 text-right text-lg font-black uppercase";

  return (
    <div className="space-y-1" aria-live="polite">
      <div className={rowClass}>
        <span>Subtotal:</span>
        <span className="border-2 border-kiln-ink bg-white px-2 py-1">{formatMoney(subtotal)}</span>
      </div>
      <div className={rowClass}>
        <span>Shipping:</span>
        <span className="border-2 border-kiln-ink bg-white px-2 py-1">{formatMoney(shipping)}</span>
      </div>
      <div className={rowClass}>
        <span>Grand Total:</span>
        <span className="border-2 border-kiln-ink bg-white px-2 py-1">{formatMoney(grandTotal)}</span>
      </div>
    </div>
  );
}
