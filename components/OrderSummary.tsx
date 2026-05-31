"use client";

import { useAppSelector } from "@/lib/hooks";
import TotalsBox from "./TotalsBox";
import CheckoutForm from "./CheckoutForm";

export default function OrderSummary() {
  const values = useAppSelector((state) => state.checkout.values);

  return (
    <aside id="summary" className="kiln-panel overflow-hidden">
      <div className="border-b-2 border-kiln-ink bg-kiln-paperDark px-3 py-2">
        <h2 className="font-display text-2xl font-black uppercase tracking-wide">Order Summary</h2>
      </div>
      <div className="space-y-5 p-4">
        <div className="space-y-2 text-sm font-black uppercase">
          <p>Customer Name: <span className="font-bold normal-case">{values.customerName || "—"}</span></p>
          <p>Phone: <span className="font-bold normal-case">{values.phone || "—"}</span></p>
          <p>Email: <span className="font-bold normal-case">{values.email || "—"}</span></p>
          <p>Shipping Address: <span className="font-bold normal-case">{values.shippingAddress || "—"}</span></p>
          <p>Project Notes: <span className="font-bold normal-case">{values.projectNotes || "—"}</span></p>
        </div>
        <div className="h-0.5 bg-kiln-ink" />
        <TotalsBox compact />
        <CheckoutForm compact />
      </div>
    </aside>
  );
}
