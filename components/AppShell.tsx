import AddTileCta from "./AddTileCta";
import CartTable from "./CartTable";
import DecorativeTiles from "./DecorativeTiles";
import DesignGrid from "./DesignGrid";
import Footer from "./Footer";
import Header from "./Header";
import MobileOrderForm from "./MobileOrderForm";
import OrderSummary from "./OrderSummary";
import TotalsBox from "./TotalsBox";

export default function AppShell() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-8">
      <DecorativeTiles />
      <Header />

      <main className="mx-auto max-w-[1480px] px-4">
        <MobileOrderForm />

        <div className="hidden grid-cols-[410px_minmax(400px,1fr)_360px] gap-8 xl:grid">
          <div className="space-y-4">
            <CartTable />
            <AddTileCta />
            <TotalsBox />
          </div>

          <DesignGrid />

          <OrderSummary />
        </div>
      </main>
      <Footer />
    </div>
  );
}
