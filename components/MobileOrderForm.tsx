import AddTileCta from "./AddTileCta";
import CartTable from "./CartTable";
import CheckoutForm from "./CheckoutForm";
import TotalsBox from "./TotalsBox";

export default function MobileOrderForm() {
  return (
    <div className="space-y-5 xl:hidden">
      <CartTable />
      <AddTileCta />
      <TotalsBox />
      <div className="kiln-panel p-4">
        <CheckoutForm />
      </div>
    </div>
  );
}
