"use client";

import { motion, AnimatePresence } from "framer-motion";
import { decrementQuantity, incrementQuantity, removeItem, updateQuantity } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { formatMoney } from "@/lib/calculations";
import TilePreview from "./TilePreview";

export default function CartTable() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  return (
    <section id="cart" className="kiln-panel overflow-hidden">
      <div className="border-b-2 border-kiln-ink bg-kiln-paperDark px-3 py-2">
        <h2 className="font-display text-2xl font-black uppercase tracking-wide md:text-3xl">
          Shopping Cart & Design Tool
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-130 border-collapse text-center text-sm font-black uppercase">
          <thead>
            <tr className="bg-kiln-paperDark/70">
              <th className="border-b-2 border-r-2 border-kiln-ink p-2">Tile Collection</th>
              <th className="border-b-2 border-r-2 border-kiln-ink p-2">Item</th>
              <th className="border-b-2 border-r-2 border-kiln-ink p-2">Quantity<br />(sq. ft.)</th>
              <th className="border-b-2 border-r-2 border-kiln-ink p-2">Unit Price<br />($)</th>
              <th className="border-b-2 border-kiln-ink p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.tr
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="align-middle"
                >
                  <td className="border-b-2 border-r-2 border-kiln-ink p-2">
                    <div className="flex flex-col items-center gap-1">
                      <TilePreview tile={item} size="md" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="border-b-2 border-r-2 border-kiln-ink p-2">
                    <TilePreview tile={item} size="lg" className="mx-auto" />
                  </td>
                  <td className="border-b-2 border-r-2 border-kiln-ink p-2">
                    <div className="flex items-center justify-center gap-1 flex-col-reverse">
                      <button
                        type="button"
                        className="rounded border-2 border-kiln-ink bg-white px-2"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <input
                        aria-label={`${item.name} quantity`}
                        className="w-16 border-2 border-kiln-ink bg-white px-2 py-1 text-center"
                        type="number"
                        min={0}
                        value={item.quantity}
                        onChange={(event) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Number(event.target.value)
                            })
                          )
                        }
                      />
                      <button
                        type="button"
                        className="rounded border-2 border-kiln-ink bg-kiln-teal px-2 text-white"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border-b-2 border-r-2 border-kiln-ink p-2 text-lg">
                    [{formatMoney(item.price)}]
                  </td>
                  <td className="border-b-2 border-kiln-ink p-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded border-2 border-kiln-ink bg-kiln-terracotta px-2 py-1 text-xs text-white transition hover:scale-105"
                      onClick={() => dispatch(removeItem(item.id))}
                      aria-label={`Remove ${item.name}`}
                    >
                      🗑 Remove
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </section>
  );
}
