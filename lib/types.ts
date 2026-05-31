export type TileId = "ocean-wave" | "forest-fern" | "terracotta-dot" | "yellow-star";

export type PaymentMethod = "credit-card" | "paypal" | "apple-pay" | "bank-transfer";

export interface Tile {
  id: TileId;
  name: string;
  price: number;
  quantity: number;
  patternClass: string;
  accent: string;
}

export interface GridCell {
  id: string;
  tileId: TileId | null;
}

export interface CheckoutFormValues {
  customerName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  projectNotes: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
}

export interface FormErrors {
  customerName?: string;
  phone?: string;
  email?: string;
  shippingAddress?: string;
  cardNumber?: string;
  expiration?: string;
  cvv?: string;
}
